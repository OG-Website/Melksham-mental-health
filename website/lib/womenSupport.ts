import { randomUUID } from 'crypto';
import { queryPortalDb } from '@/lib/portalDb';

export type WomenSupportReportStatus = 'submitted' | 'reviewing' | 'ready';

export interface WomenSupportAttachmentSummary {
  id: string;
  reportId: string;
  createdAt: string;
  filename: string;
  contentType: string;
  sizeBytes: number;
}

export interface WomenSupportReport {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  createdAt: string;
  updatedAt: string;
  anonymousToPolice: boolean;
  immediateDanger: boolean;
  incidentType: string;
  incidentDateText?: string;
  incidentLocation?: string;
  platformOrChannel?: string;
  relationshipContext?: string;
  suspectName?: string;
  suspectContact?: string;
  summary: string;
  messageExcerpt?: string;
  impactStatement?: string;
  desiredSupport?: string;
  evidenceLinks?: string;
  policeReference?: string;
  status: WomenSupportReportStatus;
  adminNotes?: string;
  attachments: WomenSupportAttachmentSummary[];
  generatedPack: string;
}

export interface CreateWomenSupportAttachmentInput {
  filename: string;
  contentType: string;
  sizeBytes: number;
  fileBytes: Buffer;
}

export interface CreateWomenSupportReportInput {
  userId: string;
  anonymousToPolice: boolean;
  immediateDanger: boolean;
  incidentType: string;
  incidentDateText?: string;
  incidentLocation?: string;
  platformOrChannel?: string;
  relationshipContext?: string;
  suspectName?: string;
  suspectContact?: string;
  summary: string;
  messageExcerpt?: string;
  impactStatement?: string;
  desiredSupport?: string;
  evidenceLinks?: string;
  attachments: CreateWomenSupportAttachmentInput[];
}

type ReportRow = {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  anonymousToPolice: boolean;
  immediateDanger: boolean;
  incidentType: string;
  incidentDateText: string | null;
  incidentLocation: string | null;
  platformOrChannel: string | null;
  relationshipContext: string | null;
  suspectName: string | null;
  suspectContact: string | null;
  summary: string;
  messageExcerpt: string | null;
  impactStatement: string | null;
  desiredSupport: string | null;
  evidenceLinks: string | null;
  policeReference: string | null;
  status: WomenSupportReportStatus | string;
  adminNotes: string | null;
};

type AttachmentRow = {
  id: string;
  reportId: string;
  createdAt: string | Date;
  filename: string;
  contentType: string;
  sizeBytes: number;
};

const STATUS_VALUES: readonly WomenSupportReportStatus[] = ['submitted', 'reviewing', 'ready'];

function toOptionalText(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : undefined;
}

function toIsoString(value: string | Date): string {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function normalizeStatus(value: unknown): WomenSupportReportStatus {
  return STATUS_VALUES.includes(value as WomenSupportReportStatus)
    ? (value as WomenSupportReportStatus)
    : 'submitted';
}

function buildGeneratedPack(
  report: Omit<WomenSupportReport, 'generatedPack' | 'attachments'> & { attachments: WomenSupportAttachmentSummary[] },
): string {
  const lines = [
    'Melksham Mental Health - Police Support Pack',
    `Pack created: ${new Date(report.updatedAt).toLocaleString('en-GB')}`,
    `Internal reference: ${report.id}`,
    `Reporter name: ${report.userName}`,
    `Reporter email: ${report.userEmail}`,
    `Anonymous police pack requested: ${report.anonymousToPolice ? 'Yes' : 'No'}`,
    `Immediate danger flagged: ${report.immediateDanger ? 'Yes' : 'No'}`,
    `Incident type: ${report.incidentType}`,
    report.incidentDateText ? `When it happened: ${report.incidentDateText}` : null,
    report.incidentLocation ? `Where it happened: ${report.incidentLocation}` : null,
    report.platformOrChannel ? `Platform / channel: ${report.platformOrChannel}` : null,
    report.relationshipContext ? `Relationship context: ${report.relationshipContext}` : null,
    report.suspectName ? `Person being reported: ${report.suspectName}` : null,
    report.suspectContact ? `Known contact details / usernames: ${report.suspectContact}` : null,
    '',
    'What happened',
    report.summary,
    report.messageExcerpt ? `\nMessages / wording provided\n${report.messageExcerpt}` : null,
    report.impactStatement ? `\nImpact on safety / wellbeing\n${report.impactStatement}` : null,
    report.desiredSupport ? `\nSupport requested\n${report.desiredSupport}` : null,
    report.evidenceLinks ? `\nEvidence links\n${report.evidenceLinks}` : null,
    report.attachments.length > 0
      ? `\nUploaded evidence files\n${report.attachments.map((attachment) => `- ${attachment.filename} (${attachment.contentType}, ${attachment.sizeBytes} bytes)`).join('\n')}`
      : '\nUploaded evidence files\n- None uploaded in portal',
    report.policeReference ? `\nPolice reference\n${report.policeReference}` : null,
    report.adminNotes ? `\nAdmin notes\n${report.adminNotes}` : null,
    '',
    'Suggested next steps',
    report.immediateDanger
      ? '- Call 999 immediately if there is an active threat or ongoing violence.'
      : '- Use 101 or the local police online reporting route for non-emergency incidents.',
    '- Keep original screenshots, URLs, usernames, times and dates where possible.',
    '- Avoid deleting evidence until police or a specialist adviser confirms it is safe to do so.',
    '- Consider Clare\'s Law / the Domestic Violence Disclosure Scheme if the risk relates to a current or former partner.',
  ].filter(Boolean);

  return lines.join('\n');
}

function hydrateReport(row: ReportRow, attachments: WomenSupportAttachmentSummary[]): WomenSupportReport {
  const reportBase = {
    id: row.id,
    userId: row.userId,
    userName: row.userName,
    userEmail: row.userEmail,
    createdAt: toIsoString(row.createdAt),
    updatedAt: toIsoString(row.updatedAt),
    anonymousToPolice: row.anonymousToPolice,
    immediateDanger: row.immediateDanger,
    incidentType: row.incidentType,
    summary: row.summary,
    status: normalizeStatus(row.status),
    attachments,
    ...(row.incidentDateText ? { incidentDateText: row.incidentDateText } : {}),
    ...(row.incidentLocation ? { incidentLocation: row.incidentLocation } : {}),
    ...(row.platformOrChannel ? { platformOrChannel: row.platformOrChannel } : {}),
    ...(row.relationshipContext ? { relationshipContext: row.relationshipContext } : {}),
    ...(row.suspectName ? { suspectName: row.suspectName } : {}),
    ...(row.suspectContact ? { suspectContact: row.suspectContact } : {}),
    ...(row.messageExcerpt ? { messageExcerpt: row.messageExcerpt } : {}),
    ...(row.impactStatement ? { impactStatement: row.impactStatement } : {}),
    ...(row.desiredSupport ? { desiredSupport: row.desiredSupport } : {}),
    ...(row.evidenceLinks ? { evidenceLinks: row.evidenceLinks } : {}),
    ...(row.policeReference ? { policeReference: row.policeReference } : {}),
    ...(row.adminNotes ? { adminNotes: row.adminNotes } : {}),
  };

  return {
    ...reportBase,
    generatedPack: buildGeneratedPack(reportBase),
  };
}

async function listAttachmentsForReports(reportIds: readonly string[]): Promise<Map<string, WomenSupportAttachmentSummary[]>> {
  const attachmentsByReport = new Map<string, WomenSupportAttachmentSummary[]>();
  if (reportIds.length === 0) return attachmentsByReport;

  const result = await queryPortalDb<AttachmentRow>(
    `
      SELECT
        id,
        report_id AS "reportId",
        created_at AS "createdAt",
        filename,
        content_type AS "contentType",
        size_bytes AS "sizeBytes"
      FROM portal_women_report_attachments
      WHERE report_id = ANY($1::text[])
      ORDER BY created_at ASC
    `,
    [reportIds],
  );

  for (const row of result.rows) {
    const attachment: WomenSupportAttachmentSummary = {
      id: row.id,
      reportId: row.reportId,
      createdAt: toIsoString(row.createdAt),
      filename: row.filename,
      contentType: row.contentType,
      sizeBytes: Number(row.sizeBytes),
    };
    const group = attachmentsByReport.get(row.reportId);
    if (group) {
      group.push(attachment);
    } else {
      attachmentsByReport.set(row.reportId, [attachment]);
    }
  }

  return attachmentsByReport;
}

async function hydrateReports(rows: ReportRow[]): Promise<WomenSupportReport[]> {
  const attachmentsByReport = await listAttachmentsForReports(rows.map((row) => row.id));
  return rows.map((row) => hydrateReport(row, attachmentsByReport.get(row.id) ?? []));
}

export async function listWomenSupportReportsForUser(userId: string): Promise<WomenSupportReport[]> {
  const result = await queryPortalDb<ReportRow>(
    `
      SELECT
        r.id,
        r.user_id AS "userId",
        u.name AS "userName",
        u.email AS "userEmail",
        r.created_at AS "createdAt",
        r.updated_at AS "updatedAt",
        r.anonymous_to_police AS "anonymousToPolice",
        r.immediate_danger AS "immediateDanger",
        r.incident_type AS "incidentType",
        r.incident_date_text AS "incidentDateText",
        r.incident_location AS "incidentLocation",
        r.platform_or_channel AS "platformOrChannel",
        r.relationship_context AS "relationshipContext",
        r.suspect_name AS "suspectName",
        r.suspect_contact AS "suspectContact",
        r.summary,
        r.message_excerpt AS "messageExcerpt",
        r.impact_statement AS "impactStatement",
        r.desired_support AS "desiredSupport",
        r.evidence_links AS "evidenceLinks",
        r.police_reference AS "policeReference",
        r.status,
        r.admin_notes AS "adminNotes"
      FROM portal_women_reports r
      INNER JOIN portal_users u ON u.id = r.user_id
      WHERE r.user_id = $1
      ORDER BY r.created_at DESC
    `,
    [userId],
  );

  return hydrateReports(result.rows);
}

export async function listWomenSupportReportsForAdmin(limit = 50): Promise<WomenSupportReport[]> {
  const result = await queryPortalDb<ReportRow>(
    `
      SELECT
        r.id,
        r.user_id AS "userId",
        u.name AS "userName",
        u.email AS "userEmail",
        r.created_at AS "createdAt",
        r.updated_at AS "updatedAt",
        r.anonymous_to_police AS "anonymousToPolice",
        r.immediate_danger AS "immediateDanger",
        r.incident_type AS "incidentType",
        r.incident_date_text AS "incidentDateText",
        r.incident_location AS "incidentLocation",
        r.platform_or_channel AS "platformOrChannel",
        r.relationship_context AS "relationshipContext",
        r.suspect_name AS "suspectName",
        r.suspect_contact AS "suspectContact",
        r.summary,
        r.message_excerpt AS "messageExcerpt",
        r.impact_statement AS "impactStatement",
        r.desired_support AS "desiredSupport",
        r.evidence_links AS "evidenceLinks",
        r.police_reference AS "policeReference",
        r.status,
        r.admin_notes AS "adminNotes"
      FROM portal_women_reports r
      INNER JOIN portal_users u ON u.id = r.user_id
      ORDER BY r.created_at DESC
      LIMIT $1
    `,
    [limit],
  );

  return hydrateReports(result.rows);
}

export async function createWomenSupportReport(
  input: CreateWomenSupportReportInput,
): Promise<WomenSupportReport> {
  const id = randomUUID();
  const now = new Date().toISOString();

  await queryPortalDb(
    `
      INSERT INTO portal_women_reports (
        id,
        user_id,
        created_at,
        updated_at,
        anonymous_to_police,
        immediate_danger,
        incident_type,
        incident_date_text,
        incident_location,
        platform_or_channel,
        relationship_context,
        suspect_name,
        suspect_contact,
        summary,
        message_excerpt,
        impact_statement,
        desired_support,
        evidence_links,
        status
      ) VALUES (
        $1, $2, $3::timestamptz, $4::timestamptz, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, 'submitted'
      )
    `,
    [
      id,
      input.userId,
      now,
      now,
      input.anonymousToPolice,
      input.immediateDanger,
      input.incidentType.trim().slice(0, 120),
      toOptionalText(input.incidentDateText, 120) ?? null,
      toOptionalText(input.incidentLocation, 200) ?? null,
      toOptionalText(input.platformOrChannel, 200) ?? null,
      toOptionalText(input.relationshipContext, 200) ?? null,
      toOptionalText(input.suspectName, 200) ?? null,
      toOptionalText(input.suspectContact, 200) ?? null,
      input.summary.trim().slice(0, 10000),
      toOptionalText(input.messageExcerpt, 12000) ?? null,
      toOptionalText(input.impactStatement, 5000) ?? null,
      toOptionalText(input.desiredSupport, 5000) ?? null,
      toOptionalText(input.evidenceLinks, 5000) ?? null,
    ],
  );

  for (const attachment of input.attachments) {
    await queryPortalDb(
      `
        INSERT INTO portal_women_report_attachments (
          id,
          report_id,
          created_at,
          filename,
          content_type,
          size_bytes,
          file_bytes
        ) VALUES ($1, $2, $3::timestamptz, $4, $5, $6, $7)
      `,
      [
        randomUUID(),
        id,
        now,
        attachment.filename.slice(0, 255),
        attachment.contentType.slice(0, 120),
        attachment.sizeBytes,
        attachment.fileBytes,
      ],
    );
  }

  const reports = await listWomenSupportReportsForUser(input.userId);
  const created = reports.find((report) => report.id === id);
  if (!created) {
    throw new Error('Report was created but could not be reloaded.');
  }
  return created;
}

export async function updateWomenSupportReportByAdmin(
  reportId: string,
  status: WomenSupportReportStatus,
  adminNotes?: string,
  policeReference?: string,
): Promise<boolean> {
  const result = await queryPortalDb(
    `
      UPDATE portal_women_reports
      SET
        updated_at = NOW(),
        status = $2,
        admin_notes = $3,
        police_reference = $4
      WHERE id = $1
    `,
    [
      reportId,
      normalizeStatus(status),
      toOptionalText(adminNotes, 10000) ?? null,
      toOptionalText(policeReference, 200) ?? null,
    ],
  );

  return (result.rowCount ?? 0) > 0;
}

export async function getWomenSupportAttachmentForDownload(
  reportId: string,
  attachmentId: string,
  requester: { userId: string; isAdmin: boolean },
): Promise<{
  filename: string;
  contentType: string;
  fileBytes: Buffer;
} | null> {
  const accessResult = await queryPortalDb<{ userId: string }>(
    `
      SELECT user_id AS "userId"
      FROM portal_women_reports
      WHERE id = $1
      LIMIT 1
    `,
    [reportId],
  );

  const reportOwnerId = accessResult.rows[0]?.userId;
  if (!reportOwnerId) return null;
  if (!requester.isAdmin && reportOwnerId !== requester.userId) return null;

  const result = await queryPortalDb<{
    filename: string;
    contentType: string;
    fileBytes: Buffer;
  }>(
    `
      SELECT
        filename,
        content_type AS "contentType",
        file_bytes AS "fileBytes"
      FROM portal_women_report_attachments
      WHERE id = $1 AND report_id = $2
      LIMIT 1
    `,
    [attachmentId, reportId],
  );

  const row = result.rows[0];
  if (!row) return null;

  return {
    filename: row.filename,
    contentType: row.contentType,
    fileBytes: row.fileBytes,
  };
}

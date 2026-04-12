import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowLeft, FaDownload, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasWomenSupportAccess } from '@/lib/portalFocus';
import { WomenSupportReportForm } from '@/components/WomenSupportReportForm';
import { AdminWomenReportUpdateForm } from '@/components/AdminWomenReportUpdateForm';
import { listWomenSupportReportsForAdmin, listWomenSupportReportsForUser } from '@/lib/womenSupport';

export const metadata = {
  title: 'Report Him | Melksham Mental Health',
  description: 'Structured reporting for stalking, intimate image abuse, threats and domestic abuse evidence.',
};

export default async function ReportHimPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/report-him');
  }
  if (!user.isAdmin && !hasWomenSupportAccess(user)) {
    redirect('/portal');
  }

  const reports = user.isAdmin
    ? await listWomenSupportReportsForAdmin(50)
    : await listWomenSupportReportsForUser(user.id);

  return (
    <div className="page-content women-space-page">
      <div className="flex items-center gap-3 mb-2">
        <Link href={user.isAdmin ? '/portal' : '/portal/womens-space'} className="text-pink-100 hover:text-white transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="women-space-kicker">Report Him</p>
      </div>

      <div className="women-space-hero text-left">
        <h1 className="women-space-title">Report Him</h1>
        <p className="women-space-copy">
          Capture a structured timeline, upload screenshots, generate a police-ready pack and keep the evidence together.
          This creates an internal support record and export text. It does not directly submit to the police.
        </p>
      </div>

      {!user.isAdmin ? (
        <div className="mt-8">
          <WomenSupportReportForm />
        </div>
      ) : null}

      <section className="mt-10 text-left">
        <div className="flex items-center gap-3 mb-4">
          <FaShieldAlt className="text-pink-100" />
          <h2 className="women-space-section-title !mb-0">
            {user.isAdmin ? 'Incoming reports' : 'Your saved reports'}
          </h2>
        </div>

        {reports.length === 0 ? (
          <div className="women-space-panel">
            <p className="women-space-panel-copy">
              {user.isAdmin ? 'No reports have been submitted yet.' : 'You have not saved any reports yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reports.map((report) => (
              <article key={report.id} className="women-space-section">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="women-space-kicker !mb-0">Reference {report.id.slice(0, 8)}</span>
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-pink-50">
                    {report.status}
                  </span>
                  <span className="text-xs text-pink-100/80">
                    {new Date(report.createdAt).toLocaleString('en-GB')}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="women-space-panel">
                    <h3 className="women-space-panel-title">{report.incidentType}</h3>
                    <p className="women-space-panel-copy"><strong>Reporter:</strong> {report.userName} ({report.userEmail})</p>
                    {report.incidentDateText ? <p className="women-space-panel-copy"><strong>When:</strong> {report.incidentDateText}</p> : null}
                    {report.platformOrChannel ? <p className="women-space-panel-copy"><strong>Platform:</strong> {report.platformOrChannel}</p> : null}
                    {report.incidentLocation ? <p className="women-space-panel-copy"><strong>Location:</strong> {report.incidentLocation}</p> : null}
                    {report.relationshipContext ? <p className="women-space-panel-copy"><strong>Context:</strong> {report.relationshipContext}</p> : null}
                    {report.suspectName ? <p className="women-space-panel-copy"><strong>Person reported:</strong> {report.suspectName}</p> : null}
                    <p className="women-space-panel-copy"><strong>Anonymous police pack:</strong> {report.anonymousToPolice ? 'Yes' : 'No'}</p>
                    <p className="women-space-panel-copy"><strong>Immediate danger:</strong> {report.immediateDanger ? 'Yes' : 'No'}</p>
                    {report.policeReference ? <p className="women-space-panel-copy"><strong>Police reference:</strong> {report.policeReference}</p> : null}
                  </div>

                  <div className="women-space-panel">
                    <h3 className="women-space-panel-title">Evidence</h3>
                    {report.attachments.length > 0 ? (
                      <ul className="space-y-2">
                        {report.attachments.map((attachment) => (
                          <li key={attachment.id}>
                            <a
                              href={`/api/portal/report-him/${report.id}/attachments/${attachment.id}`}
                              className="inline-flex items-center gap-2 text-sm text-pink-50 underline"
                            >
                              <FaDownload />
                              {attachment.filename}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="women-space-panel-copy">No uploaded files.</p>
                    )}
                    {report.evidenceLinks ? (
                      <div className="mt-3">
                        <p className="women-space-panel-copy"><strong>Evidence links</strong></p>
                        <pre className="women-space-pack whitespace-pre-wrap">{report.evidenceLinks}</pre>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="women-space-panel mt-4">
                  <h3 className="women-space-panel-title">Police-ready pack</h3>
                  <div className="inline-flex items-center gap-2 text-pink-50 text-sm mb-3">
                    <FaFileAlt />
                    Structured summary for police or safeguarding conversations
                  </div>
                  <pre className="women-space-pack whitespace-pre-wrap">{report.generatedPack}</pre>
                </div>

                {user.isAdmin ? (
                  <AdminWomenReportUpdateForm
                    reportId={report.id}
                    currentStatus={report.status}
                    currentPoliceReference={report.policeReference}
                    currentAdminNotes={report.adminNotes}
                  />
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

import { generateAllCourseDecks } from '../lib/courseDeckGenerator.ts';
import { normalizeCourseModuleId } from '../lib/courseDecks.ts';

const requestedIds = process.argv
  .slice(2)
  .map((value) => normalizeCourseModuleId(value))
  .filter((value) => value !== null);

const generatedFiles = await generateAllCourseDecks(requestedIds);

console.log(`Generated ${generatedFiles.length} course deck files.`);
for (const filePath of generatedFiles) {
  console.log(filePath);
}

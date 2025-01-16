const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(process.cwd(), 'public', 'templates');

// Ensure templates directory exists
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

function createSafetyReport() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(templatesDir, 'safety-report.pdf')));

  // Title
  doc.fontSize(24).text('Safety Report Template', { align: 'center' });
  doc.moveDown();

  // Sections
  const sections = [
    { title: '1. Incident Details', fields: ['Date:', 'Time:', 'Location:', 'Type of Incident:'] },
    { title: '2. Personnel Involved', fields: ['Names:', 'Roles:', 'Departments:'] },
    { title: '3. Description', fields: ['Incident Description:', 'Immediate Actions Taken:'] },
    { title: '4. Root Cause Analysis', fields: ['Primary Cause:', 'Contributing Factors:'] },
    { title: '5. Corrective Actions', fields: ['Immediate Actions:', 'Long-term Prevention:'] }
  ];

  sections.forEach(section => {
    doc.fontSize(16).text(section.title);
    doc.moveDown(0.5);
    section.fields.forEach(field => {
      doc.fontSize(12).text(field);
      doc.moveDown(0.5);
      doc.moveTo(doc.x, doc.y)
         .lineTo(doc.x + 400, doc.y)
         .stroke();
      doc.moveDown();
    });
    doc.moveDown();
  });

  doc.end();
}

function createEnvironmentalAssessment() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(templatesDir, 'env-assessment.pdf')));

  // Title
  doc.fontSize(24).text('Environmental Assessment Template', { align: 'center' });
  doc.moveDown();

  // Sections
  const sections = [
    { title: '1. Project Overview', fields: ['Project Name:', 'Location:', 'Scope:'] },
    { title: '2. Environmental Factors', fields: ['Air Quality Impact:', 'Water Resources:', 'Wildlife Impact:', 'Vegetation Impact:'] },
    { title: '3. Mitigation Measures', fields: ['Proposed Measures:', 'Implementation Timeline:', 'Responsible Parties:'] },
    { title: '4. Monitoring Plan', fields: ['Monitoring Methods:', 'Frequency:', 'Reporting Requirements:'] },
    { title: '5. Compliance', fields: ['Regulatory Requirements:', 'Permits Required:', 'Compliance Timeline:'] }
  ];

  sections.forEach(section => {
    doc.fontSize(16).text(section.title);
    doc.moveDown(0.5);
    section.fields.forEach(field => {
      doc.fontSize(12).text(field);
      doc.moveDown(0.5);
      doc.moveTo(doc.x, doc.y)
         .lineTo(doc.x + 400, doc.y)
         .stroke();
      doc.moveDown();
    });
    doc.moveDown();
  });

  doc.end();
}

function createOperationsManual() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(templatesDir, 'ops-manual.pdf')));

  // Title
  doc.fontSize(24).text('Operations Manual Template', { align: 'center' });
  doc.moveDown();

  // Sections
  const sections = [
    { title: '1. System Overview', fields: ['System Name:', 'Purpose:', 'Key Components:'] },
    { title: '2. Standard Operating Procedures', fields: ['Startup Procedure:', 'Normal Operation:', 'Shutdown Procedure:', 'Emergency Procedures:'] },
    { title: '3. Maintenance', fields: ['Routine Maintenance:', 'Preventive Maintenance:', 'Maintenance Schedule:'] },
    { title: '4. Safety Guidelines', fields: ['Safety Precautions:', 'PPE Requirements:', 'Emergency Contacts:'] },
    { title: '5. Documentation', fields: ['Required Records:', 'Reporting Procedures:', 'Record Retention:'] }
  ];

  sections.forEach(section => {
    doc.fontSize(16).text(section.title);
    doc.moveDown(0.5);
    section.fields.forEach(field => {
      doc.fontSize(12).text(field);
      doc.moveDown(0.5);
      doc.moveTo(doc.x, doc.y)
         .lineTo(doc.x + 400, doc.y)
         .stroke();
      doc.moveDown();
    });
    doc.moveDown();
  });

  doc.end();
}

// Generate all templates
console.log('Generating PDF templates...');
createSafetyReport();
createEnvironmentalAssessment();
createOperationsManual();
console.log('PDF templates generated successfully!'); 
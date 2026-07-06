// ── DATA ──────────────────────────────────────────────────────────────────────

const modals = {

  // ── ONLINE SERVICES ──
  pan: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#0e5a74;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 9h8M8 13h5"/></svg>`,
    iconBg: '#d1edf5',
    title: 'PAN Card Application',
    subtitle: 'New PAN · Correction · Reprint',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Documents required</div>
        <ul class="doc-list">
          <li>Aadhaar card (original + photocopy)</li>
          <li>Passport-size photograph (2 copies)</li>
          <li>Date of birth proof — Birth certificate / Class 10 marksheet</li>
          <li>Address proof — Voter ID / Driving licence / Electricity bill</li>
          <li>Mobile number linked to Aadhaar (for OTP verification)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">For correction or reprint</div>
        <ul class="doc-list">
          <li>Existing PAN card (original)</li>
          <li>Supporting document for the correction (e.g. name change certificate)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Note:</strong> Processing usually takes 10–15 working days. We will give you the acknowledgement number for tracking.</div>
      </div>`
  },

  st: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b3a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><path d="M9 13l2 2 4-4"/></svg>`,
    iconBg: '#d5f0e0',
    title: 'ST Certificate',
    subtitle: 'Scheduled Tribe certificate',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Documents required</div>
        <ul class="doc-list">
          <li>Aadhaar card (original + photocopy)</li>
          <li>Voter ID or any government-issued photo ID</li>
          <li>Parent's ST certificate (if available)</li>
          <li>Birth certificate or Class 10 marksheet (age proof)</li>
          <li>Passport-size photograph (2 copies)</li>
          <li>Residence proof — Electricity bill / Ration card</li>
          <li>Village / Gaon Burah declaration letter (if required by Circle Office)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Note:</strong> Certificate is issued by the Circle Officer. Processing time varies — typically 7–30 days depending on verification.</div>
      </div>`
  },

  income: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#8a5a00;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Income Certificate',
    subtitle: 'For scholarships, loans &amp; welfare schemes',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Documents required</div>
        <ul class="doc-list">
          <li>Aadhaar card (original + photocopy)</li>
          <li>Voter ID or any government photo ID</li>
          <li>Ration card (photocopy)</li>
          <li>Salary slip / Pay certificate (for salaried applicants)</li>
          <li>Self-declaration of income (for farmers / daily wage earners)</li>
          <li>Passport-size photograph (2 copies)</li>
          <li>Bank passbook (first page photocopy)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Note:</strong> The certificate is valid for one year. Issued by the Circle Officer after field verification.</div>
      </div>`
  },

  prc: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#8a1a4a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v1"/></svg>`,
    iconBg: '#fde8f0',
    title: 'PRC Certificate',
    subtitle: 'Permanent Resident Certificate',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Documents required</div>
        <ul class="doc-list">
          <li>Aadhaar card (original + photocopy)</li>
          <li>Voter ID (original + photocopy)</li>
          <li>Birth certificate or Class 10 certificate</li>
          <li>Parent's PRC or domicile proof</li>
          <li>Ration card with your name included</li>
          <li>Land document / Property deed (if applicable)</li>
          <li>Passport-size photograph (2 copies)</li>
          <li>Gaon Burah / Village headman certificate</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Note:</strong> PRC is issued by the Deputy Commissioner's Office. Required for government jobs, admissions, and residency proof in Meghalaya.</div>
      </div>`
  },

  scholarship: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#0a5c52;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    iconBg: '#daf2ee',
    title: 'Scholarship Application',
    subtitle: 'Pre-matric · Post-matric · Merit scholarships',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Documents required (all students)</div>
        <ul class="doc-list">
          <li>Aadhaar card (student's)</li>
          <li>ST / SC certificate (if applying under reserved category)</li>
          <li>Income certificate of parent/guardian</li>
          <li>Previous year marksheet / Board certificate</li>
          <li>School / College bonafide certificate</li>
          <li>Bank account passbook (student's, first page)</li>
          <li>Passport-size photograph (2 copies)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Scholarship types we handle</div>
        <div class="badge-row">
          <span class="badge">Pre-matric (class 9–10)</span>
          <span class="badge">Post-matric</span>
          <span class="badge">National Merit</span>
          <span class="badge">Tribal / TBSE</span>
          <span class="badge">NMMSS</span>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Tip:</strong> Apply before the deadline. Bring all originals for verification — we will scan and upload everything.</div>
      </div>`
  },

  other: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#4a5568;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`,
    iconBg: '#eef0f2',
    title: 'Other Government Applications',
    subtitle: 'Ration card · Voter ID · Aadhaar · Birth certificate',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Aadhaar (new / update / reprint)</div>
        <ul class="doc-list">
          <li>Existing Aadhaar card or enrolment slip</li>
          <li>Mobile number for OTP</li>
          <li>Supporting document for any change (address proof, name certificate)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Voter ID (new / correction)</div>
        <ul class="doc-list">
          <li>Aadhaar card</li>
          <li>Age proof (Class 10 certificate / Birth certificate)</li>
          <li>Address proof (Electricity bill / Ration card)</li>
          <li>Passport-size photograph (2 copies)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Ration card (new / addition)</div>
        <ul class="doc-list">
          <li>Aadhaar cards of all family members</li>
          <li>Existing ration card (if adding member)</li>
          <li>Address proof</li>
          <li>Family photograph</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Not sure what you need?</strong> Just walk in and describe what you're applying for — we'll guide you on the exact documents needed.</div>
      </div>`
  },

  // ── PRINTING ──
  'photo-print': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b8a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>`,
    iconBg: '#e8f4f8',
    title: 'Photo Printing',
    subtitle: 'Colour &amp; black-and-white photo prints',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Price list</div>
        <table class="price-table">
          <tr><th>Size</th><th>Colour</th><th>B&amp;W</th></tr>
          <tr><td>Passport size (3.5×4.5 cm) — per strip of 6</td><td class="price">₹30</td><td class="price">₹20</td></tr>
          <tr><td>Stamp size (2×2.5 cm) — per strip of 8</td><td class="price">₹30</td><td class="price">₹20</td></tr>
          <tr><td>Wallet size (6×9 cm)</td><td class="price">₹20</td><td class="price">₹10</td></tr>
          <tr><td>4×6 inch (standard)</td><td class="price">₹20</td><td class="price">₹10</td></tr>
          <tr><td>5×7 inch</td><td class="price">₹40</td><td class="price">₹25</td></tr>
          <tr><td>8×10 inch</td><td class="price">₹80</td><td class="price">₹50</td></tr>
          <tr><td>A4 photo print</td><td class="price">₹100</td><td class="price">₹60</td></tr>
        </table>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">How to get your photos printed</div>
        <ul class="doc-list">
          <li>Bring a USB drive, SD card, or your phone with the photo</li>
          <li>Or send the photo via WhatsApp (+91 8974756830)</li>
          <li>Photo editing / background removal available on request</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Ready in minutes.</strong> Passport and stamp size photos are printed while you wait.</div>
      </div>`
  },

  'photo-frame': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b8a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="7" y="7" width="10" height="10" rx="0.5"/></svg>`,
    iconBg: '#e8f4f8',
    title: 'Photo Frames',
    subtitle: 'Printed &amp; framed photos for every occasion',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Frame Sizes</div>
        <div class="item-photo-grid">

          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="7" y="7" width="10" height="10" rx="0.5"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info">
              <div class="iname">4×6 inch</div>
              <div class="idesc">Small wallet-friendly frame — great for desk display or gifting</div>
              <div class="iprice">₹80</div>
            </div>
          </div>

          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="7" y="7" width="10" height="10" rx="0.5"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info">
              <div class="iname">5×7 inch</div>
              <div class="idesc">Standard frame — popular for family photos and school pictures</div>
              <div class="iprice">₹120</div>
            </div>
          </div>

          <div class="item-photo-card">
            <div class="item-photo"><img src="images/frame1.jpeg" alt="8x10 inch photo frame" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="item-photo-info">
              <div class="iname">8×10 inch</div>
              <div class="idesc">Medium frame — perfect for portraits and wedding photos on the wall</div>
              <div class="iprice">₹200</div>
            </div>
          </div>

          <div class="item-photo-card">
            <div class="item-photo"><img src="images/frame2.jpeg" alt="A4 photo frame style 1" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="item-photo-info">
              <div class="iname">A4 (8.3×11.7 inch)</div>
              <div class="idesc">Large frame — ideal for certificates, awards, and home decoration</div>
              <div class="iprice">₹250</div>
            </div>
          </div>

          <div class="item-photo-card">
            <div class="item-photo"><img src="images/frame3.jpeg" alt="A4 photo frame style 2" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="item-photo-info">
              <div class="iname">A4 — Style 2</div>
              <div class="idesc">Another A4 frame design — different border style, same great quality</div>
              <div class="iprice">₹250</div>
            </div>
          </div>

          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="7" y="7" width="10" height="10" rx="0.5"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info">
              <div class="iname">A3 (11.7×16.5 inch)</div>
              <div class="idesc">XL frame — best for group photos, events, and office display</div>
              <div class="iprice">₹400</div>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Popular for</div>
        <div class="badge-row">
          <span class="badge badge-amber">Family portraits</span>
          <span class="badge badge-amber">Wedding photos</span>
          <span class="badge badge-amber">School photos</span>
          <span class="badge badge-amber">Gifts</span>
          <span class="badge badge-amber">Office &amp; home decor</span>
          <span class="badge badge-amber">Certificates &amp; awards</span>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Tip:</strong> Bring your photo on your phone, USB, or SD card. We can also scan and reprint old physical photos into a new frame!</div>
      </div>`
  },

  flex: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b8a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M3 3h18v14H3z"/><path d="M8 21h8M12 17v4"/></svg>`,
    iconBg: '#e8f4f8',
    title: 'Flex / Banner Printing',
    subtitle: 'Large-format printing for banners, boards &amp; events',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Pricing (per sq. ft.)</div>
        <table class="price-table">
          <tr><th>Type</th><th>Price / sq. ft.</th></tr>
          <tr><td>Standard flex (indoor)</td><td class="price">₹20 – ₹25</td></tr>
          <tr><td>Star flex (outdoor, weather-resistant)</td><td class="price">₹30 – ₹35</td></tr>
          <tr><td>Backlit flex (for illuminated boards)</td><td class="price">₹40 – ₹50</td></tr>
        </table>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Minimum order &amp; turnaround</div>
        <ul class="doc-list">
          <li>Minimum size: 2 sq. ft.</li>
          <li>Ready within 24 hours for standard orders</li>
          <li>Same-day printing available for urgent orders (extra charge may apply)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">How to place an order</div>
        <ul class="doc-list">
          <li>Share your design file (PDF / JPG / PNG / CDR) via WhatsApp or USB</li>
          <li>Don't have a design? We offer basic design service — ask us!</li>
          <li>Specify size in feet × feet (e.g. 4 ft × 2 ft)</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Popular uses:</strong> Shop boards, election banners, birthday banners, event displays, church/school notice boards.</div>
      </div>`
  },

  'doc-print': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b8a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`,
    iconBg: '#e8f4f8',
    title: 'Document Printing',
    subtitle: 'Black &amp; white and colour printouts',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Price list</div>
        <table class="price-table">
          <tr><th>Type</th><th>Single-sided</th><th>Double-sided</th></tr>
          <tr><td>B&amp;W — A4</td><td class="price">₹2</td><td class="price">₹3</td></tr>
          <tr><td>B&amp;W — A3</td><td class="price">₹5</td><td class="price">₹8</td></tr>
          <tr><td>Colour — A4</td><td class="price">₹10</td><td class="price">₹18</td></tr>
          <tr><td>Colour — A3</td><td class="price">₹20</td><td class="price">₹35</td></tr>
        </table>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">How to get your document printed</div>
        <ul class="doc-list">
          <li>Bring on USB drive, SD card, or your phone</li>
          <li>Send via WhatsApp (+91 8974756830) before visiting</li>
          <li>Email to cscmawkyrdep@gmail.com</li>
          <li>We also print directly from internet / online portals</li>
        </ul>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Bulk discount:</strong> Printing 50+ pages? Ask us about bulk rates.</div>
      </div>`
  },

  photocopy: {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#1a6b8a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><polyline points="1,4 1,10 7,10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>`,
    iconBg: '#e8f4f8',
    title: 'Photocopy &amp; Scanning',
    subtitle: 'Fast copies and digital scans of your documents',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Price list</div>
        <table class="price-table">
          <tr><th>Service</th><th>Price</th></tr>
          <tr><td>Photocopy (B&amp;W) — per page</td><td class="price">₹1 – ₹2</td></tr>
          <tr><td>Photocopy (Colour) — per page</td><td class="price">₹8 – ₹10</td></tr>
          <tr><td>Scan to PDF — per page</td><td class="price">₹5</td></tr>
          <tr><td>Scan + send via WhatsApp / Email</td><td class="price">₹10</td></tr>
        </table>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">What we can scan</div>
        <div class="badge-row">
          <span class="badge">Aadhaar card</span>
          <span class="badge">Certificates</span>
          <span class="badge">Marksheets</span>
          <span class="badge">Passbook</span>
          <span class="badge">ID proofs</span>
          <span class="badge">Legal documents</span>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Quick service:</strong> Photocopies are done immediately. Scanned files are sent to your WhatsApp or email on the spot.</div>
      </div>`
  },

  // ── STATIONERY ──
  's-pens': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Pens',
    subtitle: 'Writing pens for school, college &amp; office',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Ballpoint Pens</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Reynolds 045</div><div class="idesc">Smooth fine tip, exam favourite</div><div class="iprice">₹5</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><img src="images/cello.png" alt="Cello Gripper pen" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="item-photo-info"><div class="iname">Cello Gripper</div><div class="idesc">Rubber grip, long writing comfort</div><div class="iprice">₹8</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Linc Pentonic</div><div class="idesc">Lightweight, smooth ink flow</div><div class="iprice">₹7</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Gel Pens</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Cello Butterflow</div><div class="idesc">Smooth gel, great for notes</div><div class="iprice">₹10 – ₹15</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Flair Gel Pen</div><div class="idesc">Bold ink, black / blue / red</div><div class="iprice">₹12 – ₹20</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Sketch Pens &amp; Markers</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Sketch Pen Set</div><div class="idesc">12 colours, Camlin / Faber-Castell</div><div class="iprice">₹30 – ₹50</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Highlighter</div><div class="idesc">Neon colours, for marking notes</div><div class="iprice">₹20 – ₹40</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Available colours:</strong> Black, Blue, Red, Green. Ask us for a specific brand!</div>
      </div>`
  },

  's-pencils': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Pencils',
    subtitle: 'Pencils, erasers &amp; sharpeners',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Writing Pencils</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Natraj HB Pencil</div><div class="idesc">Smooth dark line, exam standard</div><div class="iprice">₹5</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Apsara HB Pencil</div><div class="idesc">Break-resistant, student favourite</div><div class="iprice">₹5</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Pencil Box (10 pcs)</div><div class="idesc">Natraj / Apsara set, school kit</div><div class="iprice">₹40 – ₹60</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Colour Pencils</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Camlin (12 colours)</div><div class="idesc">Bright shades, smooth pigment</div><div class="iprice">₹50 – ₹80</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Faber-Castell (12)</div><div class="idesc">Premium, rich colours, long-lasting</div><div class="iprice">₹80 – ₹100</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Colour Pencils (24)</div><div class="idesc">Full range for art projects</div><div class="iprice">₹100 – ₹150</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Erasers &amp; Sharpeners</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Natraj Eraser</div><div class="idesc">Clean erasing, no paper tear</div><div class="iprice">₹5</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Dust-free Eraser</div><div class="idesc">No smudge, less mess on page</div><div class="iprice">₹8 – ₹10</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><line x1="12" y1="8" x2="12" y2="16"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Sharpener w/ Container</div><div class="idesc">Collects shavings, no mess</div><div class="iprice">₹15 – ₹20</div></div>
          </div>
        </div>
      </div>`
  },

  's-register': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Register Copies',
    subtitle: 'Hard-bound registers for school &amp; office',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Registers</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Ruled Register (100 pg)</div><div class="idesc">Standard ruled, for class notes and office use</div><div class="iprice">₹40 – ₹60</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Ruled Register (200 pg)</div><div class="idesc">Thicker, great for full semester notes</div><div class="iprice">₹70 – ₹100</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Office Ledger Register</div><div class="idesc">Wide columns for accounts and records</div><div class="iprice">₹60 – ₹80</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Long Book (A4)</div><div class="idesc">A4 size, ruled, for college assignments</div><div class="iprice">₹50 – ₹70</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box">Available in foolscap, A4, and legal sizes. Ask us for the right one for your class or office.</div>
      </div>`
  },

  's-plain': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Plain Copies',
    subtitle: 'Blank / unlined exercise books',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Plain Copies</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Small Plain Copy</div><div class="idesc">50 pages, unlined, ideal for rough work and drawing</div><div class="iprice">₹15 – ₹20</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Medium Plain Copy</div><div class="idesc">100 pages, good quality paper, no ink bleeding</div><div class="iprice">₹25 – ₹35</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Large Plain Copy (A4)</div><div class="idesc">100 pages, A4 size, for art and project work</div><div class="iprice">₹35 – ₹50</div></div>
          </div>
        </div>
      </div>`
  },

  's-singleline': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Single-line Copies',
    subtitle: 'Ruled exercise books for writing',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Single-Line Copies</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Small (50 pages)</div><div class="idesc">Single ruled lines, for primary school students</div><div class="iprice">₹20 – ₹25</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Medium (100 pages)</div><div class="idesc">Most popular, used by all school classes</div><div class="iprice">₹30 – ₹40</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Large A4 (100 pages)</div><div class="idesc">A4 size ruled, for college students</div><div class="iprice">₹40 – ₹55</div></div>
          </div>
        </div>
      </div>`
  },

  's-notebooks': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Various Notebooks',
    subtitle: 'Spiral, soft-cover &amp; hardbound notebooks',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Notebooks</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Spiral Notebook (A5)</div><div class="idesc">Compact, ruled, easy to carry in bag</div><div class="iprice">₹40 – ₹60</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Spiral Notebook (A4)</div><div class="idesc">Full A4 size, ruled, for college notes</div><div class="iprice">₹60 – ₹80</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Soft-cover Notebook</div><div class="idesc">Lightweight, flexible cover, everyday use</div><div class="iprice">₹30 – ₹50</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Pocket Notebook</div><div class="idesc">Small, fits in pocket, for quick notes</div><div class="iprice">₹20 – ₹35</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Lab Record Book</div><div class="idesc">Half plain half ruled, for science practicals</div><div class="iprice">₹50 – ₹80</div></div>
          </div>
        </div>
      </div>`
  },

  's-graph': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Graph Copies',
    subtitle: 'Grid-ruled books for maths, science &amp; drawing',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Graph Copies</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Small Graph (50 pg)</div><div class="idesc">1 mm fine grid, for Class 6–8 maths &amp; science</div><div class="iprice">₹25 – ₹35</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Medium Graph (100 pg)</div><div class="idesc">5 mm standard grid, most common for high school</div><div class="iprice">₹40 – ₹55</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Large A4 Graph (100 pg)</div><div class="idesc">A4 size 5 mm grid, for engineering &amp; college diagrams</div><div class="iprice">₹55 – ₹70</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Isometric Graph</div><div class="idesc">Triangle dot grid, for 3D drawing &amp; design projects</div><div class="iprice">₹40 – ₹55</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box"><strong>Not sure which to get?</strong> Tell us your class and subject — we'll recommend the right graph copy for you.</div>
      </div>`
  },

  's-other': {
    icon: `<svg viewBox="0 0 24 24" style="stroke:#d4870a;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;width:24px;height:24px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    iconBg: '#fef3d0',
    title: 'Other Stationery',
    subtitle: 'Everything else you need for school &amp; office',
    body: `
      <div class="modal-section">
        <div class="modal-section-title">Available Items</div>
        <div class="item-photo-grid">
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="6" x2="22" y2="6"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Ruler (30 cm)</div><div class="idesc">Transparent plastic, mm &amp; cm markings</div><div class="iprice">₹10 – ₹20</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><polygon points="12,2 22,20 2,20"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Geometry Box</div><div class="idesc">Compass, divider, set squares, protractor</div><div class="iprice">₹40 – ₹100</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Glue Stick</div><div class="idesc">Non-toxic, dries clear, for paper projects</div><div class="iprice">₹15 – ₹25</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"/><path d="M18 3v12"/><path d="M3 15h18"/><path d="M3 21h18"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Stapler + Pins</div><div class="idesc">Desktop stapler with staple pin box</div><div class="iprice">₹60 – ₹120</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="4" rx="2"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Cello Tape</div><div class="idesc">Clear adhesive tape for wrapping &amp; sticking</div><div class="iprice">₹10 – ₹20</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">White-out / Correction Pen</div><div class="idesc">Quick-dry correction fluid for mistakes</div><div class="iprice">₹15 – ₹30</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">File Folders / Covers</div><div class="idesc">Plastic &amp; paper folders for keeping documents</div><div class="iprice">₹5 – ₹25</div></div>
          </div>
          <div class="item-photo-card">
            <div class="item-photo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg><div class="photo-label">📷 Photo coming soon</div></div>
            <div class="item-photo-info"><div class="iname">Sticky Notes</div><div class="idesc">Neon colour Post-it notes for reminders</div><div class="iprice">₹20 – ₹40</div></div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="note-box">Don't see what you need? Ask us — we stock a wide range and can order specific items on request.</div>
      </div>`
  }
};

// ── MODAL OPEN / CLOSE ────────────────────────────────────────────────────────

function openModal(key) {
  const data = modals[key];
  if (!data) return;

  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-header-icon" style="background:${data.iconBg}">${data.icon}</div>
    <div class="modal-header-text">
      <h3>${data.title}</h3>
      <p>${data.subtitle}</p>
    </div>
    <button class="modal-close" onclick="closeModal()" aria-label="Close">✕</button>
  `;
  document.getElementById('modalBody').innerHTML = data.body;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalBox').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});


// ── SLIDER ───────────────────────────────────────────────────────────────────
var slideIndex = 0;
var totalSlides = 5;
var sliderTimer;

function slideTo(n) {
  slideIndex = n;
  document.getElementById('sliderTrack').style.transform = 'translateX(-' + (n * 100) + '%)';
  document.querySelectorAll('.slider-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === n);
  });
}

function slideMove(dir) {
  slideIndex = (slideIndex + dir + totalSlides) % totalSlides;
  slideTo(slideIndex);
  resetSliderTimer();
}

function resetSliderTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(function() { slideMove(1); }, 4500);
}

// Auto-play
sliderTimer = setInterval(function() { slideMove(1); }, 4500);

// Pause on hover
document.getElementById('mainSlider').addEventListener('mouseenter', function() { clearInterval(sliderTimer); });
document.getElementById('mainSlider').addEventListener('mouseleave', function() { resetSliderTimer(); });

// ── NAV ───────────────────────────────────────────────────────────────────────
function toggleMenu() {
  var nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Real video content — YouTube playlist PLWdVlyflZ4vy7n3w9qi5QihgYwzT8HXtJ
const OPERATOR_BRIEFINGS = [
  { id: "0nkKumOmb_A", title: "Scaling with AI-Powered Operations", desc: "How leaders are using AI to drive operational excellence at scale.", dur: "5:00" },
  { id: "NLzRbnXRCEw", title: "Ep. 9: Even Obama Didn't See This Coming", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:50" },
  { id: "0F31zBYmn9k", title: "Ep. 5: Life Insurance Gets a DNA Test", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:44" },
  { id: "WynKxNKzao4", title: "Ep. 7: Apple Can't Save Us", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:35" },
  { id: "1gB39UcJTSk", title: "Ep. 10: Healthcare's New World Order", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:35" },
  { id: "gk70gvdXkVY", title: "Ep. 3: Invasion of the Body Scanners!", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:34" },
  { id: "nG9ME-DApJg", title: "Ep. 2: “Can” Doesn't Always Mean “Should”", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:27" },
  { id: "W3XiDBZW9fQ", title: "Ep. 11: DOJ Busts Big Health's Trust", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:19" },
  { id: "AUxLU5QjifU", title: "Ep. 13: Privatization of the VA", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:15" },
  { id: "IoZbWnFwi3w", title: "Ep. 4: Medical Malls", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:15" },
  { id: "qfTpHFsJo38", title: "Ep. 6: Access is the New Antibiotic", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:10" },
  { id: "Zzqa4TTaI-c", title: "Ep. 8: Blockchain's Health Data Utopia", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:13" },
  { id: "2MrPd-YmAuc", title: "Ep. 1: Cut The Sugar", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:04" },
  { id: "hl6XavUxb48", title: "Ep. 12: The Payor Trifecta", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:04" },
  { id: "sfTOZUJGQRU", title: "Ep. 14: Quantitative Diagnostics", desc: "Operator Briefings — healthcare, technology, and leadership.", dur: "1:04" }
];

function renderVideoGrid(container, videos) {
  if (!container) return;
  container.innerHTML = videos.map(v => `
    <a class="video-card" href="https://www.youtube.com/watch?v=${v.id}&list=PLWdVlyflZ4vy7n3w9qi5QihgYwzT8HXtJ" target="_blank" rel="noopener">
      <div class="video-thumb" style="background-image:url('https://i.ytimg.com/vi/${v.id}/hqdefault.jpg')">
        <span class="dur">${v.dur}</span>
        <div class="play"><span>▶</span></div>
      </div>
      <div class="body">
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>
    </a>
  `).join('');
}

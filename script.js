// Data for grades and frequency (all good)
const subjectsByTrim = {
  1: [
    {name:'Matemática', score:9, details:['Prova 1: 9', 'Trabalho: 10']},
    {name:'Biologia', score:7, details:['Prova 1: 9', 'Trabalho: 8']},
    {name:'Português', score:8.5, details:['Prova: 9.5']},
    {name:'História', score:9, details:['Prova: 9']},
    {name:'Física', score:8.8, details:['Prova: 8.8']},
    {name:'Química', score:7.5, details:['Prova: 9.2']},
    {name:'Artes', score:10, details:['Projeto: 9.4']},
    {name:'Educação Física', score:10, details:['Participação: 10']},
    {name:'Geografia', score:8.1, details:['Prova: 9']},
    {name:'Biomecânica', score:6.9, details:['Prova: 9.1']},
     {name:'Inglês', score:8.5, details:['Prova: 9.1']},
      {name:'Redação', score:6, details:['Prova: 9.1']},
       {name:'Resolução de problemas', score:9.1, details:['Prova: 9.1']}, 
       {name:'Literatura', score:7, details:['Prova: 9.1']},
  ],
  
  2: [
    {name:'Matemática', score:9, details:['Prova 2: 9.5']},
    {name:'Biologia', score:7, details:['Prova 2: 9', 'Trabalho: 10']},
    {name:'História', score:9.5, details:['Prova: 9.2']},
    {name:'Física', score:8.5, details:['Prova: 9.0']},
    {name:'Português', score:7, details:['Prova: 9.3']},
    {name:'Química', score: 8, details:['Prova: 9.1']},
    {name:'Artes', score:9, details:['Projeto: 9.5']},
    {name:'Educação Física', score:8.8, details:['Participação: 10']},
    {name:'Geografia', score:7, details:['Prova: 9.0']},
    {name:'Biomecânica', score:'pendente', details:['Prova: 9.4']},
     {name:'Inglês', score:'pendente', details:['Prova: 9.1']},
      {name:'Redação', score:6, details:['Prova: 9.1']},
       {name:'Resolução de problemas', score:7.2, details:['Prova: 9.1']}, 
       {name:'Literatura', score:8.5, details:['Prova: 9.1']},
  ],
  3: [
    {name:'Matemática', score:7, details:['Recuperação: 10']},
    {name:'Física', score: 'pendente', details:['Prova: 9.5']},
    {name:'Química', score:'pendente', details:['Prova: 9']},
    {name:'História', score:8.5, details:['Prova: 9.3']},
    {name:'Biologia',score:'pendente', details:['Prova: 9.3']},
    {name:'Português', score:'pendente', details:['Prova: 9.4']},
    {name:'Artes', score:'pendente', details:['Projeto: 9.6']},
    {name:'Educação Física', score:'pendente', details:['Participação: 10']},
    {name:'Geografia', score:'pendente', details:['Prova: 9.2']},
    {name:'Biomecânica', score:'pendente', details:['Prova: 9.5']},
     {name:'Inglês', score:'pendente', details:['Prova: 9.1']},
      {name:'Redação', score:'pendente', details:['Prova: 9.1']},
       {name:'Resolução de problemas', score:'pendente', details:['Prova: 9.1']}, 
       {name:'Literatura', score:'pendente', details:['Prova: 9.1']},
  ],
  ER: [
    {name:'Projeto', score:9.7, details:['Entrega: 9.7']},
    {name:'Atividades Complementares', score:9.4, details:['Atividade: 9.4']}
  ]
};

// Frequency data (good frequencies)
const freqData = [
  {nome: 'Matemática - M321', presencas: 54, aulas: 58, faltas:4},
  {nome: 'Biologia - M321', presencas: 53, aulas: 58, faltas:5},
  {nome: 'Física - M321', presencas: 50, aulas: 54, faltas:4},
  {nome: 'História - M321', presencas: 56, aulas: 58, faltas:2},
  {nome: 'Química - M321', presencas: 52, aulas: 56, faltas:4},
  {nome: 'Artes - M321', presencas: 28, aulas: 32, faltas:4},
  {nome: 'Educação Física - M321', presencas: 32, aulas: 32, faltas:0},
  {nome: 'Geografia - M321', presencas: 55, aulas: 58, faltas:3},
  {nome: 'Português - M321', presencas: 57, aulas: 58, faltas:1},
  {nome: 'Biomecânica - M321', presencas: 54, aulas: 58, faltas:4}
];

// GRADES rendering
const gradesArea = document.getElementById('grades-area');

function render(trimKey){
  if(!gradesArea) return;
  gradesArea.innerHTML = '';
  const list = subjectsByTrim[trimKey] || [];
  list.forEach(sub=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="subject">${escapeHtml(sub.name)}</div>
      <div class="evaluations">
        <div class="eval-title">AVALIAÇÕES</div>
        <button class="ace-eval-toggle">▼</button>
      </div>
      <div class="aproveitamento">
        <div>APROVEITAMENTO</div>
        <div class="score">${formatScore(sub.score)}/10</div>
      </div>
      <div class="details" style="display:none;margin-top:10px;padding:8px;border-radius:8px;background:#fafafa;border:1px solid #f0f0f0;">
        ${sub.details.map(d=>`<div>${escapeHtml(d)}</div>`).join('')}
      </div>
    `;
    gradesArea.appendChild(card);

    const toggle = card.querySelector('.ace-eval-toggle');
    const details = card.querySelector('.details');
    toggle.addEventListener('click', ()=> {
      const visible = details.style.display !== 'none';
      details.style.display = visible ? 'none' : 'block';
      toggle.textContent = visible ? '▼' : '▲';
    });
  });
}

function formatScore(s){
  return (Math.round(s * 10) / 10).toString().replace('.', ',');
}
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// Tabs
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.trim;
    render(key);
  });
});

// Initial render default to 2° Trim
document.addEventListener('DOMContentLoaded', ()=>{
  const defaultTab = Array.from(document.querySelectorAll('.tab')).find(t=>t.dataset.trim === '2') || document.querySelector('.tab');
  if(defaultTab) defaultTab.classList.add('active');
  render(defaultTab ? defaultTab.dataset.trim : '2');

  // Frequency rendering if on that page
  const freqList = document.getElementById('freq-list');
  if(freqList){
    // compute overall
    const totalPres = freqData.reduce((s,i)=>s+i.presencas,0);
    const totalAulas = freqData.reduce((s,i)=>s+i.aulas,0);
    const overallPct = Math.round((totalPres/totalAulas)*100);

    document.getElementById('overall-title').textContent = `${totalPres} PRESENÇAS EM ${totalAulas} AULAS`;
    document.getElementById('overall-bar').style.width = overallPct + '%';
    document.getElementById('overall-bar').textContent = overallPct + '%';

    freqList.innerHTML = '';
    freqData.forEach(mat => {
      const pct = Math.round((mat.presencas / mat.aulas) * 100);
      const card = document.createElement('div');
      card.className = 'freq-card';
      card.innerHTML = `
        <div class="freq-subject">${mat.nome}</div>
        <div class="freq-subinfo">${mat.presencas} presenças em ${mat.aulas} aulas</div>
        <div class="bar">
          <div class="bar-fill" style="width:${pct}%">${pct}%</div>
        </div>
        <div class="faltas">
          ${mat.faltas} FALTAS
          <span>▼</span>
        </div>
        <div class="faltas-details">
          Faltas registradas: ${mat.faltas}
        </div>
      `;
      const faltasBtn = card.querySelector('.faltas');
      const detalhe = card.querySelector('.faltas-details');
      faltasBtn.addEventListener('click', () => {
        const open = detalhe.style.display === 'block';
        detalhe.style.display = open ? 'none' : 'block';
        faltasBtn.querySelector('span').textContent = open ? '▼' : '▲';
      });
      freqList.appendChild(card);
    });
  }
});
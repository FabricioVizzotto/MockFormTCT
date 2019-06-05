const defaultData = {
    data: () => ({
      id:"040849",
      especialidades:['CARDIOLOGIA','CIRURGIA GERAL','GERIATRIA'],
      hipoteses:['hipertensão arterial sistemica','cirurgia plastica de mama','tremor essencial'],
      teleconsultores:['Adriana Mergel', 'Juliana Brenner', 'Juliana Pfeil'],
      CIAP:['(A01) Dor generalizada/múltipla', '(N89) Enxaqueca', '(S19) Outra lesão cutânea'],
      CID:['(A00) Cólera','(G00) Meningite bacteriana não classificada em outra parte','(Z00) Exame geral e investigação de pessoas sem queixas ou diagnóstico relatado'],
      teleconsultorResponsavel:'CONEXUM',
      unidade:'UNIDADE DE SAUDE CAMAQUA',
      solicitante:'Romero Britto',
      sidebarOpen:"TCT",
      acoes:['close','person','history','chat'],
      cbo:"Médico da Familia",
      descricao:'',
      processos:[
        {
        id:1,
        status:'Em Consultoria',
        teleconsultorResponsavel:'CONEXUM 1',
        solicitante:'Médico UBS',
        paciente:'Test Test',
        hipotese:'Amenorreia',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },
        {
        id:2,
        status:'Finalizado',
        teleconsultorResponsavel:'CONEXUM 2',
        paciente:'Test Test',
        hipotese:'Hipertensão',
        solicitante:'Médico UBS',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },
        {
        id:3,
        status:'Cancelado',
        teleconsultorResponsavel:'CONEXUM 3',
        solicitante:'Médico UBS',
        paciente:'Test Test',
        hipotese:'Ataque Cardiaco',
        descricao:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
      },

      ],
    }),
};

export { defaultData };

import { useState, useEffect } from "react";
import FilterBar from "../FilterBar/FilterBar";
import style from "./Overview.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import PolarChart from "../PolarChart/PolarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart"
import WordCloud from "../WordCloud/WordCloud";
import Header from "../Header/Header";

export default function Overview() {
  const allData = {
    analyzedPosts: 26757,
    relevantPosts: 3341,
    mostRelevantPosts: [
      { id: 16074, title: "Como derrubar um servidor", rate: 0.97, category: "Hacking", created_at: '16/05/2023', ioc: 'Sim', keyword: 'Não', relevant: 'Sim', fulltext: "deface conhecimento deface sites queria umas dicas todo mundo fala script kiddie entrar grupo deface acesso ftp site zueira faco ideia injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor dica pretende saber criacao deface injecao injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor" },
      { id: 16074, title: "Como derrubar um servidor", rate: 0.97, category: "Hacking", created_at: '16/05/2023', ioc: 'Sim', keyword: 'Não', relevant: 'Sim', fulltext: "deface conhecimento deface sites queria umas dicas todo mundo fala script kiddie entrar grupo deface acesso ftp site zueira faco ideia injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor dica pretende saber criacao deface injecao injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor" },
      { id: 16074, title: "Como derrubar um servidor", rate: 0.97, category: "Hacking", created_at: '16/05/2023', ioc: 'Sim', keyword: 'Não', relevant: 'Sim', fulltext: "deface conhecimento deface sites queria umas dicas todo mundo fala script kiddie entrar grupo deface acesso ftp site zueira faco ideia injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor dica pretende saber criacao deface injecao injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor" },
      { id: 13617, title: "Como obter o endereço de IP de um servidor", rate: 0.97, category: "Outro", created_at: '18/02/2023', ioc: 'Sim', keyword: 'Sim', relevant: 'Sim', fulltext: "preciso vingar pessoas foderam preciso foder volta deem dicas posso foder desse povo virtualmente comprometer anonimato frango internet putz nunca pensei nisso pessoas foderam preciso foder volta deem dicas posso foder desse povo vingaca prato come quente hein putz nunca pensei nisso adianta foder dessa rapaziada maneira virtual total anonimato putz nunca pensei nisso faca pirraca transforme errozinho qualquer tragedia inaceitavel putz nunca pensei nisso hackeia putz nunca pensei nisso engenharia social usando fake procura fake generator deep web crie persona campanhas phishing enviar link malicioso arquivo infectado pdf xls xlsx infeccao malware trojan keylogger ransomware spoofing rede bastante acessada pessoa spyware coletar algumas informacoes acesso sites acessados historico navegacao entrar webcam infeliz capturar imagens putz nunca pensei nisso comer maravilhoso putz nunca pensei nisso melhor vinganca despreso putz nunca pensei nisso sla maximo fazia cadastrar email primo batia xingava rss site porno gay putz nunca pensei nisso taca fogo casa molotov garrafa plastico amor criador hipotetico putz nunca pensei nisso"},
      { id: 16408, title: "Como atacar um servidor", rate: 0.97, category: "Hacking", created_at: '29/06/2023', ioc: 'Sim', keyword: 'Sim', relevant: 'Sim', fulltext: "telas fakes sabe consigo tela fake hospedar engracado acabei responder falando enfim nome desse ataque tela fake spoofing phishing categoria muitos ataques baseiam conceito simples passar host confiavel conseguir informacoes referentes host usando aplicacao parecida identica novamente ataque vem muitas maneiras diferentes definitivamente famoso comprar dominio parecido dominio host confiavel exemplo confiavel exempio dominio atacante note silaba plo substitui maiusculo caso vitima prestasse atencao redirecionada pagina atacante aonde poderia aplicar golpe engenharia social induzindo vitima preencher formulario login qualquer outra informacao enviado diretamente servidor segredo nesse ataque basta escolher vitima comprar dominio site vitima usa diariamente hospedar servidor apache vida comprar hospedagem copiar pagina login site escolhido baixando html retocando mao ficar tao configurar formularios registrar informacoes dentro database novamente tipo spoofing fundo nesse assunto tanto ataques spoofing old school baseavam realizar ddos site escolhido tirar forcar roteador redirecionar vitima usando vulnerabilidade roteador colocando atacante header pacote tcp inves original detalhes sempre sabera sabe sempre sabera sempre sabera" },
    ],
  };

  const dataPerYear = {
    label: "no ano",
    analyzedPosts: 1500,
    relevantPosts: 322,
    mostRelevantPosts: [
      { id: 2002, title: "Como realizar um ataque na internet", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 544, title: "Como montar uma botnet", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 1320, title: "Como descobrir a senha de um usuário", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerMonth = {
    label: "no mês",
    analyzedPosts: 1000,
    relevantPosts: 124,
    mostRelevantPosts: [
      { id: 3023, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 133, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 222, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerWeek = {
    label: "na semana",
    analyzedPosts: 500,
    relevantPosts: 87,
    mostRelevantPosts: [
      { id: 12, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 35, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 201, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const dataPerDay = {
    label: "hoje",
    analyzedPosts: 75,
    relevantPosts: 17,
    mostRelevantPosts: [
      { id: 332, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não'},
      { id: 231, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não'},
      { id: 3043, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
    ],
  };

  const palavras = [
    { text: 'phishing', value: 10 },
    { text: 'ransomware', value: 15 },
    { text: 'trojan', value: 3 },
    { text: 'malware', value: 1 },
    { text: 'botnet', value: 62 },
    { text: 'spyware', value: 7 },
    { text: 'adware', value: 5 },
    { text: 'rootkit', value: 6 },
    { text: 'exploit', value: 11 },
    { text: 'backdoor', value: 9 },
    { text: 'keylogger', value: 7 },
    { text: 'zero-day', value: 13 },
    { text: 'DDoS', value: 14 },
    { text: 'firewall', value: 10 },
    { text: 'encryption', value: 12 },
    { text: 'hashing', value: 8 },
    { text: 'token', value: 7 },
    { text: 'cyberattack', value: 10 },
    { text: 'breach', value: 9 },
    { text: 'vulnerability', value: 11 },
    { text: 'payload', value: 6 },
    { text: 'social engineering', value: 8 },
    { text: 'brute force', value: 7 },
    { text: 'SQL injection', value: 9 },
    { text: 'XSS', value: 6 },
    { text: 'CSRF', value: 5 },
    { text: 'session hijacking', value: 7 },
    { text: 'VPN', value: 8 },
    { text: '2FA', value: 7 },
    { text: 'MFA', value: 6 },
    { text: 'honeypot', value: 5 },
    { text: 'SIEM', value: 6 },
    { text: 'IDS', value: 5 },
    { text: 'IPS', value: 5 },
    { text: 'threat intelligence', value: 10 },
    { text: 'incident response', value: 9 },
    { text: 'forensics', value: 7 },
    { text: 'mitigation', value: 8 },
    { text: 'cybercrime', value: 9 },
    { text: 'APT', value: 6 },
    { text: 'penetration test', value: 10 },
    { text: 'red team', value: 7 },
    { text: 'blue team', value: 7 },
    { text: 'bug bounty', value: 6 },
    { text: 'hash', value: 5 },
    { text: 'authentication', value: 12 },
    { text: 'authorization', value: 10 },
    { text: 'access control', value: 9 },
    { text: 'JWT', value: 8 },
    { text: 'TLS', value: 6 },
    { text: 'SSL', value: 6 },
    { text: 'SOC', value: 7 },
    { text: 'IAM', value: 6 },
    { text: 'obfuscation', value: 6 },
    { text: 'reconnaissance', value: 7 },
    { text: 'threat modeling', value: 8 },
  ];

  const [filter, setFilter] = useState("Tudo");
  const [displayedData, setDisplayedData] = useState(allData);

  useEffect(() => {
    switch (filter) {
      case "Ano":
        setDisplayedData(dataPerYear);
        break;
      case "Mês":
        setDisplayedData(dataPerMonth);
        break;
      case "Semana":
        setDisplayedData(dataPerWeek);
        break;
      case "Dia":
        setDisplayedData(dataPerDay);
        break;
      case "Tudo":
      default:
        setDisplayedData(allData);
        break;
    }
  }, [filter]);

  return (
    <div className={style.app}>
      <Header pageName="Dashboard" pageDescription="Olá, administrador! Bem-vindo de volta." />
      <FilterBar setFilter={setFilter} />
      <div className={style.infosContainer}>
        <div className={style.infosContainerCol1}>
          <ProportionCard
            analyzedPosts={displayedData.analyzedPosts}
            relevantPosts={displayedData.relevantPosts}
            label={displayedData.label}
          />
          <RelevantPostsTable mostRelevantPosts={displayedData.mostRelevantPosts} />
        </div>
        <div className={style.infosContainerCol2}>
          <DoughnutChart />
        </div>
      </div>
      <BarChart />
      <WordCloud palavras={palavras} />
    </div>
  );
}

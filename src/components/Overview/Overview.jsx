import { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import FilterBar from "../FilterBar/FilterBar";
import style from "./style.module.css";
import ProportionCard from "../ProportionCard/ProportionCard";
import RelevantPostsTable from "../RelevantPostsTable/RelevantPostsTable";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import PolarChart from "../PolarChart/PolarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart"

export default function Overview() {
  const allData = {
    analyzedPosts: 26757,
    relevantPosts: 3341,
    mostRelevantPosts: [
      { id: 16074, title: "deface", rate: 0.97, category: "Hacking", created_at: '16/05/2023', ioc: 'Sim', keyword: 'Não', relevant: 'Sim', fulltext: "deface conhecimento deface sites queria umas dicas todo mundo fala script kiddie entrar grupo deface acesso ftp site zueira faco ideia injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor dica pretende saber criacao deface injecao injecao tenta tipo bancocn bota deface feito html souber pesquisa google escolha site alvo procure falhas seguranca site utilizando sql injection xss brute force inserir deface html qualquer duvida comentar esqueca vpn onde aprendo deface porque agora todos cursos ando fazendo ensinam olha existe conteudo completo especifico apenas executar deface script kiddie afirma enfim posso dizer conteudo envolve area pentest ira tentar explorar vulnerabilidades favor" },
      { id: 13617, title: "Preciso me vingar", rate: 0.97, category: "Outro", created_at: '18/02/2023', ioc: 'Sim', keyword: 'Sim', relevant: 'Sim', fulltext: "preciso vingar pessoas foderam preciso foder volta deem dicas posso foder desse povo virtualmente comprometer anonimato frango internet putz nunca pensei nisso pessoas foderam preciso foder volta deem dicas posso foder desse povo vingaca prato come quente hein putz nunca pensei nisso adianta foder dessa rapaziada maneira virtual total anonimato putz nunca pensei nisso faca pirraca transforme errozinho qualquer tragedia inaceitavel putz nunca pensei nisso hackeia putz nunca pensei nisso engenharia social usando fake procura fake generator deep web crie persona campanhas phishing enviar link malicioso arquivo infectado pdf xls xlsx infeccao malware trojan keylogger ransomware spoofing rede bastante acessada pessoa spyware coletar algumas informacoes acesso sites acessados historico navegacao entrar webcam infeliz capturar imagens putz nunca pensei nisso comer maravilhoso putz nunca pensei nisso melhor vinganca despreso putz nunca pensei nisso sla maximo fazia cadastrar email primo batia xingava rss site porno gay putz nunca pensei nisso taca fogo casa molotov garrafa plastico amor criador hipotetico putz nunca pensei nisso"},
      { id: 16408, title: "Telas Fakes", rate: 0.97, category: "Hacking", created_at: '29/06/2023', ioc: 'Sim', keyword: 'Sim', relevant: 'Sim', fulltext: "telas fakes sabe consigo tela fake hospedar engracado acabei responder falando enfim nome desse ataque tela fake spoofing phishing categoria muitos ataques baseiam conceito simples passar host confiavel conseguir informacoes referentes host usando aplicacao parecida identica novamente ataque vem muitas maneiras diferentes definitivamente famoso comprar dominio parecido dominio host confiavel exemplo confiavel exempio dominio atacante note silaba plo substitui maiusculo caso vitima prestasse atencao redirecionada pagina atacante aonde poderia aplicar golpe engenharia social induzindo vitima preencher formulario login qualquer outra informacao enviado diretamente servidor segredo nesse ataque basta escolher vitima comprar dominio site vitima usa diariamente hospedar servidor apache vida comprar hospedagem copiar pagina login site escolhido baixando html retocando mao ficar tao configurar formularios registrar informacoes dentro database novamente tipo spoofing fundo nesse assunto tanto ataques spoofing old school baseavam realizar ddos site escolhido tirar forcar roteador redirecionar vitima usando vulnerabilidade roteador colocando atacante header pacote tcp inves original detalhes sempre sabera sabe sempre sabera sempre sabera" },
    ],
  };

  const dataPerYear = {
    label: "no ano",
    analyzedPosts: 1500,
    relevantPosts: 322,
    mostRelevantPosts: [
      { id: 2002, title: "Como derrubar um servidor", rate: 1, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 544, title: "Como obter o endereço de IP de um servidor", rate: 0.8, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
      { id: 1320, title: "Como criar um servidor", rate: 0.15, category: "Links", created_at: '31/12/2020', ioc: 'Sim', keyword: 'Não', relevant: 'Não' },
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
      <header className={style.dashboardHeader}>
        <div className={style.welcome}>
          <h2>Dashboard</h2>
          <p>Olá, administrador! Bem-vindo de volta.</p>
        </div>
        <div className={style.dashboardHeaderIcons}>
          <IoIosNotificationsOutline className={style.headerIcon} />
          <CiUser className={style.headerIcon} />
        </div>
      </header>
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
    </div>
  );
}

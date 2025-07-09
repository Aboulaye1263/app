
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../components/timeline.css';

const NewTimeline = () => {
return (
    <div className="h-full py-4 px-4">
        {/* <div className="absolute md:left-1/2 lg:left-1/2 left-8 transform md:transform lg:transform -translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 translate-x-0 w-1 bg-[var(--primary)] h-full rounded-full shadow-lg z-10"></div> */}
<VerticalTimeline
lineColor="#eeD484"
layout='2-columns'
className='lg:h-[320vh]'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work font-light"
    contentStyle={{color: '#171717' }}
    contentArrowStyle={{ borderRight: '7px solid  #EED484' }}
    date="2007"
    iconStyle={{ background: '#EED484', color: '#fff', width: '10px', height: '10px' }}
  
  >
    <div className="w-full md:w-[96%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <img 
            src='/images/img-2007.jpg'
            alt='creation'
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <br></br>
        <h3 className="vertical-timeline-element-title font-medium md:text-2xl px-5">Naissance d’un acteur à part : TOM</h3>
    
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        
        <p className="font-extralight px-5 py-5">
        Nous avons décidé de mettre en œuvre notre vision : réinventer la logistique au Sénégal à travers des opérations intégrées, une proximité client forte et une ambition régionale affirmée.
        </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015"
    iconStyle={{ background: '#EED484', color: '#fff', width: '10px', height: '10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #EED484' }}
  >
    <div className="w-full md:w-[96%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <img 
        src='/images/img-2015.jpg'
        alt='Alliance avec le Port Autonome de Dakar'
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
    <br></br>
    <h3 className="vertical-timeline-element-title font-medium md:text-2xl px-5">Alliance avec le Port Autonome de Dakar</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    
    
    <p className="font-extralight px-5 py-5">
        Installation sur une plateforme logistique de 210.000 m², à 1 km du Port Autonome de Dakar.
        Une infrastructure unique au Sénégal par sa taille et sa proximité.
        Début d’une alliance stratégique avec le PAD pour repenser la logistique nationale et accompagner l’essor du commerce régional.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017"
    dateClassName="md:-mt-20"
    iconStyle={{ background: '#EED484', color: '#fff', width: '10px', height: '10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #EED484' }}
  >
    <div className="w-full md:w-[96%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <img 
        src='/images/img-2017-zud.jpg'
        alt='Alliance avec le Port Autonome de Dakar'
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
    <br></br>
    <h3 className="vertical-timeline-element-title font-medium md:text-2xl px-5">Lancement de la Zone Unique de Dépotage (ZUD)</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    
    
    <p className="font-extralight px-5 py-5">
    Création de la ZUD, initiative pionnière visant à centraliser les opérations de dépotage, 
    fluidifier les contrôles douaniers et accélérer les flux entre le port et l’hinterland, 
    notamment vers le Mali via corridor Dakar-Bamako.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work md:-top-[70vh] lg:-top-[50vh]"
    date=""
    iconStyle={{ background: '#EED484', color: '#eed484', width: '0px', height: '0px', borderWidth: '0', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid  #EED484' }}
  >
    <div className="w-full md:w-[96%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <img 
        src='/images/img-2017-entrepot.jpg'
        alt='Alliance avec le Port Autonome de Dakar'
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
    <br></br>
    <h3 className="vertical-timeline-element-title font-medium md:text-2xl px-5">Démarrage des entrepôts et services logistiques spécialisés</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
   
    
    <p className="font-extralight px-5 py-5">
        TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, 
        de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, 
        répondant aux besoins concrets des grands importateurs nationaux.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education md:-top-[55vh] lg:-top-[45vh]"
    date="Aujourd'hui"
    iconStyle={{ background: '#EED484', color: '#fff', width: '10px', height: '10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #EED484' }}
  >
    <div className="w-full md:w-[96%] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
     <img 
        src='/images/aujourdhui.png'
        alt='Alliance avec le Port Autonome de Dakar'
        className="w-full h-48 object-contain rounded-lg transition-transform duration-500 hover:scale-105"
    />
    <br></br>
    <h3 className="vertical-timeline-element-title font-medium md:text-2xl px-5">Champion national, pionnier régional</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
    
   
    <p className="font-extralight px-5 py-5">
        TOM est devenu le champion Sénégalais de la logistique et un acteur stratégique incontournable de l’industrie en Afrique de l’Ouest.
    </p>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
  );
}

export default NewTimeline;
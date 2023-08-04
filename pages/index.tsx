// import type {  GetStaticProps } from 'next'
// import Head from 'next/head'
// import Header from '../components/Header'
// import Hero from '../components/Hero'
// import About from '../components/About'
// import WorkExperience from '../components/WorkExperience'
// import Skills from '../components/Skills'
// import Projects from '../components/Projects '
// import ContactMe from '../components/ContactMe'
// import Link from 'next/link';
// import { Experience, PageInfo, Project, Skill, Social } from '../typtings'
// import { fetchPageInfo } from '../utils/fetchPageInfo'
// import { fetchExperiences } from '../utils/fetchExperiences'
// import { fetchSkills } from '../utils/fetchSkills'
// import { fetchProjects } from '../utils/fetchProjects'
// import { fetchSocial } from '../utils/fetchSocials'



// type Props = {
//   pageInfo:PageInfo;
//    experiences: Experience[];
//    skills: Skill[];
//    projects: Project[];
//    socials: Social[];
// }



// const Home  = ({pageInfo, experiences, projects, skills, socials}: Props) => {
//   return (
//     <div className='bg-[rgba(11,11,11,0.96)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#07fae6]'>
     
//       <Head>
//         <title>Pravakar's Portfolio</title>
//       </Head>
          
        
      
//             <Header />
        
//         <section id="hero" className='snap-start'>
//           <Hero />
//         </section>



//        <section id='about' className='snap-center'>
//         <About />
//        </section>

//         {/* Experience  */}
//         <section id="experience" className='snap-center'>
//         <WorkExperience  />
//         </section>

//         {/* Skills  */}
//         <section id="skills" className='snap-start'>
//           <Skills />
//         </section>

//         {/* Projects   */}
//         <section id="projects" className='snap-start'>
//           <Projects />
//         </section>
        
//         {/* Contact Me */}  
//        <section id='contact' className='snap-start'>
//           <ContactMe />
//        </section>
       
  
//          <footer className='sticky bottom-5 w-full cursor-pointer'>
//             <div className='flex items-center justify-center'>
//             <Link href="#hero">
//                <img 
//                 className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
//                 src='https://lh3.googleusercontent.com/a/AAcHTtfQdZfUCJAtoG27hm0csx82FvREMFeau_vsYqPbXcLxDQ=s360-c-no' alt='' />
//                 </Link>
//             </div>
//          </footer>
//     </div>
//   )
// }

// export default Home;


// export const GetStaticProps: GetStaticProps<Props> = async () => {
//      const pageInfo: PageInfo = await fetchPageInfo(); 
//      const experiences: Experience[] = await fetchExperiences();
//      const skills: Skill[] = await fetchSkills();
//      const projects: Project[] = await fetchProjects();
//      const socials: Social[] = await fetchSocial();


//      return {
//         props: {
//           pageInfo,
//           experiences,
//           skills,
//           projects,
//           socials,
//         }
//      }
// }




import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects ';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typtings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgba(11,11,11,0.96)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#07fae6]'>
      <Head>
        <title>Pravakar's Portfolio</title>
      </Head>

      <Header  socials={socials}/>

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About  />
      </section>

      {/* Experience  */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills  */}
      <section id="skills" className='snap-start'>
        <Skills  />
      </section>

      {/* Projects   */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Link href="#hero">
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://lh3.googleusercontent.com/a/AAcHTtfQdZfUCJAtoG27hm0csx82FvREMFeau_vsYqPbXcLxDQ=s360-c-no'
              alt=''
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo() || null
  const experiences: Experience[] = await fetchExperiences() || null;
  const skills: Skill[] = await fetchSkills() || null;
  const projects: Project[] = await fetchProjects() || null;
  const socials: Social[] = await fetchSocial()|| null;

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    //Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 second

    revalidate: 10,
  };
};

export default Home;

import {  Social } from "../typtings";


export const fetchSocial = async() => {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data =  await res.json()
    const socials: Social[] = data.socials;

    // console.log("Fetching", socials)
    
    return socials;
}
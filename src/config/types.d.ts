type NavItems = {
    title: String;
    href:string
  };

  type CareerItems = {
    position: string,
  duration: string,
  company: string,
  description: string[],
  href: string
  }

  type Victory = {
      status:string,
      entity:string,
      description:string,
      href:string,
  }

  type SkillSet = {
    genre:string,
    stack:string;
  }

  type Project = {
    title:string,
    stack:string,
    description:string[],
    links:Link[]

  }
  type Link = {
    src :string,
    text:string
  }

  type StrArray=string[];
import { Contributor } from '../app/pages/about/about/about.component';

export interface Language {
  label: string;
  value: string;
}

export type AvailableLanguages = 'en';

export interface Link {
  display: boolean;
  url: string;
}

export interface Meta {
  browseAudio: boolean;
  contributors: Contributor[];
  languages: Language[];
  links: {
    github: Link;
    medium: Link;
    facebook: Link;
    youtube: Link;
  };
  copyright: {
    name: string;
    url: string;
  };
}

export const META: Meta = {
  browseAudio: true,
  contributors: [
    {
      name: 'April Baker',
      title: 'SFN Language Coordinator',
      text:
        /* tslint:disable */
        "April is a citizen of the Selkirk First Nation and works as their Language Coordinator. She coordinates Dän K’í Language Revitalization programs and services for her people.",
      img: false
    },
    {
      name: 'Victoria Sear',
      title: 'Project Coordinator',
      text:
        /* tslint:disable */
        "Victoria offers coordination and linguistic support for this dictionary project. She is a PhD candidate in Anthropology at the University of British Columbia and works with Selkirk First Nation, the Yukon Native Language Centre and members of other Northern Tutchone First Nations. Her work focuses on language documentation, language resource development, project planning and coordination, and building capacity for community language work.",
      img: false
    },
    {
      name: 'Bailey Trotter',
      title: 'Dictionary Developer',
      text:
        /* tslint:disable */
        "Using Mother Tongues Dictionaries Bailey compiled the online interface of this dictionary project. She is a graduate student in linguistics at the University of British Columbia and has been a collaborator on multiple dictionary projects for Indigenous and endangered languages.",
      img: false
    },
    {
      name: 'Johnson Edwards',
      title: 'Speaker',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: '(Late) Tommy McGinty',
      title: 'Speaker',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Kindra Stewart',
      title: 'SFN Language Learner',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Dayna Joe',
      title: 'SFN Language Learner',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Leslie Johnson',
      title: 'SFN Language Learner',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Amanda Sam',
      title: 'SFN Language Learner',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Zina McGinty',
      title: 'SFN Language Assistant',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Shirley Joe',
      title: 'SFN Language Instructor',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Myles Blattman',
      title: 'Audio Editing',
      text:
        /* tslint:disable */
        "",
      img: false
    }
  ],
  languages: [{ label: 'en', value: 'en' }],
  copyright: {
    name: 'Mother Tongues',
    url: 'https://mothertongues.org'
  },
  links: {
    github: {
      display: false,
      url: ''
    },
    medium: {
      display: false,
      url: ''
    },
    facebook: {
      display: false,
      url: ''
    },
    youtube: {
      display: false,
      url: ''
    }
  }
};

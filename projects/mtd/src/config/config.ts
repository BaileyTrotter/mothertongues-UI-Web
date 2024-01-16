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
        "April is a citizen of the Selkirk First Nation and works as their Language Coordinator. She coordinates Northern Tutchone Language Revitalization programs and services for her people.",
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
      title: 'Website Developer',
      text:
        /* tslint:disable */
        "Bailey developed the online interface of this dictionary project using Mother Tongues Dictionaries. She has a BA in Linguistics from the University of British Columbia and has been a collaborator on multiple dictionary projects for Indigenous and endangered languages. She is currently the coordinator of the Relational Lexicography project at the University of British Columbia.",
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
      name: 'Tommy McGinty',
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
      name: 'Dena Joe',
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

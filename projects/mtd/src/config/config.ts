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
        "",
      img: false
    },
    {
      name: 'Vicki Sear',
      title: 'Project Coordinator',
      text:
        /* tslint:disable */
        "",
      img: false
    },
    {
      name: 'Bailey Trotter',
      title: 'Website Developer',
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

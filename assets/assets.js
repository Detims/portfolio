import arona_angry from './arona_angry.jpg';
import arona_happy from './arona_happy.jpg'
import hikari from './Hikari_Icon.webp';
import hikari_nozomi from './hikari_nozomi.jpg';
import hoshino from './hoshino.jpg';
import la_pluma from './la_pluma.png';
import mudrock from './Mudrock.webp';
import natsu from './natsu.jpg';
import nozomi from './Nozomi_Icon.webp';
import tororo from './tororo.jpg';
import tsuna from './tsuna.jpg';

export const assets = {
    arona_angry,
    arona_happy,
    hikari,
    hikari_nozomi,
    hoshino,
    la_pluma,
    mudrock,
    natsu,
    nozomi,
    tororo,
    tsuna,
};

export const workData = [
    {
        title: 'Project 1',
        description: 'Description 1',
        bgImage: '/knight1.jpg',
    },
    {
        title: 'Project 2',
        description: 'Description 2',
        bgImage: '/knight2.jpg',
    },
    {
        title: 'Project 3',
        description: 'Description 3',
        bgImage: '/reaper.jpg',
    },
    {
        title: 'Project 4',
        description: 'Description 4',
        bgImage: '/guard.png',
    },
];

/*
export const serviceData = [
    {},
];
*/

export const infoList = [
    { icon: assets.hikari, iconDark: assets.nozomi, title: 'Languages', description: 'HTML, CSS, Javascript, C++, Python' },
    { icon: assets.hikari, iconDark: assets.nozomi, title: 'Education', description: 'Pursuing B.S. in Computer Science' },
    { icon: assets.hikari, iconDark: assets.nozomi, title: 'Projects', description: 'Placeholder' },
];

export const toolsData = [
    assets.tsuna, assets.tororo, assets.natsu,
];
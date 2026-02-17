import { siteUrl } from './seo';

export const navigationItems = [
  { position: 1, name: "Acasă", url: siteUrl },
  { position: 2, name: "Articole", url: `${siteUrl}/articole` },
  { position: 3, name: "Omul care se reglează prin risc", url: `${siteUrl}/articole/unu` },
  { position: 4, name: "A fost odată un om ...", url: `${siteUrl}/articole/doi` },
  { position: 5, name: "Felul în care am ajuns să înțeleg adaptarea umană", url: `${siteUrl}/articole/trei` },
  { position: 6, name: "Manifest pentru învățarea minții si a corpului", url: `${siteUrl}/articole/patru` },
  { position: 7, name: "Consultanță comportamentală defensivă", url: `${siteUrl}/articole/cinci` },
  { position: 8, name: "Comportamentele care ne țin împreună (până nu ne mai țin)", url: `${siteUrl}/articole/sase` },
  { position: 9, name: "Nodul cel mai dureros din relații", url: `${siteUrl}/articole/sapte` },
  { position: 10, name: "Funcția din spatele comportamentului", url: `${siteUrl}/articole/opt` },
  { position: 11, name: "De ce stau oamenii in relații", url: `${siteUrl}/articole/noua` },
  { position: 12, name: "Costul biologic", url: `${siteUrl}/articole/zece` },
  { position: 13, name: "După despărțire", url: `${siteUrl}/articole/unspe` },
  { position: 14, name: "Influența mediului familial cu alcoolism asupra adultului: o perspectivă comportamentală și biologică", url: `${siteUrl}/articole/doispe` },
  { position: 15, name: "Moduri diferite prin care oamenii privesc realitatea interpersonală", url: `${siteUrl}/articole/treispe` },
  { position: 16, name: "Dinamica dintre stabilitatea funcțională si stabilitatea emoțională în cuplu", url: `${siteUrl}/articole/paispe` },
  { position: 17, name: "Dinamica unui cuplu în care ambii parteneri caută stabilitate funcțională", url: `${siteUrl}/articole/cinspe` },
  { position: 18, name: "Dinamica unui cuplu în care ambii parteneri caută stabilitate emoțională", url: `${siteUrl}/articole/saispe` },
  { position: 19, name: "Alte tipuri de relație", url: `${siteUrl}/articole/saptespe` },
  { position: 20, name: "Starea biologică, gândul și conflictul uman - explicație pe înțelesul oamenilor", url: `${siteUrl}/articole/opspe` },
  { position: 21, name: "De ce unii oameni nu te lasă în pace - ghid de prevenție (pe înțelesul oricui)", url: `${siteUrl}/articole/nouaspe` },
];

export const siteNavScript = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: navigationItems.map(item => ({
    "@type": "SiteNavigationElement",
    position: item.position,
    name: item.name,
    url: item.url,
  })),
};

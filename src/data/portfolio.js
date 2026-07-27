// Every project shown in the Selected Work grid.
// `slug` is used for the /work/:slug route — keep it unique and URL-safe.
// To add a new project: copy an object below, give it a new id/slug, and
// drop the matching image into /public/work/<slug>.jpg (see WorkCard.jsx).
export const categories = [
  'All',
  'Branding & Identity',
  'Jewelry & 3D Design',
  'Event & Exhibition',
  'Editorial & Research',
];

export const portfolio = [
  {
    id: 'p1',
    slug: 'anniversary-rebranding-diamond-plaza',
    title: 'Anniversary Rebranding, Diamond Plaza',
    cat: 'Branding & Identity',
    image: '/images/projects/anniversary-rebranding-diamond-plaza.webp',
    abstract:
      "A full visual identity refresh for Diamond Plaza\u2019s anniversary campaign, spanning signage, retail collateral, and digital touchpoints.",
  },
  {
    id: 'p2',
    slug: 'jewelry-collection-dong-xam-phat',
    title: 'Jewelry Collection, Dong Xam Phat',
    cat: 'Jewelry & 3D Design',
    image: '/images/projects/jewelry-collection-dong-xam-phat.webp',
    abstract:
      'A jewelry collection combining traditional metalworking with digital 3D modeling and CNC production.',
  },
  {
    id: 'p3',
    slug: 'vietcraft-x-world-crafts-council-exhibit',
    title: 'VIETCRAFT x World Crafts Council Exhibit',
    cat: 'Event & Exhibition',
    image: '/images/projects/vietcraft-x-world-crafts-council-exhibit.webp',
    abstract:
      'Exhibition design and craft products for the VIETCRAFT x World Crafts Council programme, showcasing Vietnamese craftsmanship to an international audience.',
  },
  {
    id: 'p4',
    slug: 'vsmart-campaign-visuals',
    title: 'Vsmart Campaign Visuals',
    cat: 'Branding & Identity',
    image: '/images/projects/vsmart-campaign-visuals.webp',
    abstract:
      'Key visuals and marketing collateral for Vsmart Group product launches across print and digital channels.',
  },
  {
    id: 'p5',
    slug: 'red-event-corporate-activation',
    title: 'Red Event Corporate Activation',
    cat: 'Event & Exhibition',
    image: '/images/projects/red-event-corporate-activation.webp',
    abstract:
      'Multimedia event design for corporate activations of 200 to 3000 participants, including stage, signage, and branded environments.',
  },
  {
    id: 'p6',
    slug: 'digital-heritage-research-visuals',
    title: 'Digital Heritage Research Visuals',
    cat: 'Editorial & Research',
    image: '/images/projects/digital-heritage-research-visuals.webp',
    abstract:
      'Visual research materials exploring digitized Vietnamese heritage motifs and their reinterpretation in contemporary media.',
  },
  {
    id: 'p7',
    slug: '3d-product-renders-rhino-and-blender',
    title: '3D Product Renders, Rhino and Blender',
    cat: 'Jewelry & 3D Design',
    image: '/images/projects/3d-product-renders-rhino-and-blender.webp',
    abstract:
      'Photorealistic 3D product renders produced with Rhino and Blender for jewelry and design prototyping.',
  },
  {
    id: 'p8',
    slug: 'fpt-polytechnic-studio-showcase',
    title: 'FPT Polytechnic Studio Showcase',
    cat: 'Editorial & Research',
    image: '/images/projects/fpt-polytechnic-studio-showcase.webp',
    abstract:
      'A curated showcase of student studio work from the Graphic Design Department at FPT Polytechnic International.',
  },
  {
    id: 'p9',
    slug: 'new-research-project',
    title: 'New Research Project',
    cat: 'Editorial & Research',
    image: null,
    onHold: true,
    abstract: 'Details for this project are on hold and will be added soon.',
  },
];

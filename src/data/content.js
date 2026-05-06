// Single source of truth for the portfolio content.
// Edit copy, links, or projects here without touching the components.

export const profile = {
  name: 'Mahima Agarwal',
  tagline: 'I work at the intersection of machine learning and complex systems.',
  intro:
    "Final-year B.Tech student at Cluster Innovation Centre, University of Delhi. I work on research-heavy software, from chaos-driven image encryption and privacy-preserving ML to large-scale data tooling. I like problems where mathematics and engineering both meet in the same room.",
  location: 'New Delhi, India',
  email: 'agarwalmahima01@gmail.com',
  resumeUrl: '/CVMahima.pdf',
  photoUrl: '/profile.jpg',
  socials: {
    github: 'https://github.com/mahi01agarwal',
    linkedin: 'https://www.linkedin.com/in/agarwalmahima01',
    medium: 'https://medium.com/@agarwalmahima01',
  },
};

export const about = {
  paragraphs: [
    "I'm an undergraduate researcher and engineer who keeps gravitating toward the harder, fuzzier corners of computer science, places where a system's behaviour isn't obvious from its specification.",
    "What ties these together is a research mindset: I read the paper before I touch the code, prototype in notebooks, then harden the work into something other people can run.",
    "Right now I'm most interested in machine learning systems.",
  ],
  pillars: [
    {
      title: 'Machine Learning',
      detail:
        'Vision and embedding-based retrieval — U-Net for medical imaging, Sentence-BERT + FAISS for semantic search, MediaPipe + PyTorch3D for gesture geometry.',
    },
    {
      title: 'Complex Systems',
      detail:
        'Hyperchaotic and fractional-order dynamics, large-scale Wikimedia data warehousing, and the kind of data pipelines that need to survive millions of rows.',
    },
  ],
};

export const projects = [
  {
    title: 'WikiEvolution — Article Quality Tracker',
    org: 'Wikimedia Foundation · Outreachy',
    blurb:
      'Visualization tool that traces how Wikipedia article quality evolves across WikiProjects, powered by language-agnostic ML predictions and a Toolforge-hosted pipeline that crunches millions of rows.',
    stack: ['Python', 'Wikimedia APIs', 'MariaDB', 'Toolforge', 'PAWS', 'SSH'],
    highlights: [
      'Designed scalable queries against Wikimedia replicas to handle millions of revisions.',
      'Wired in language-agnostic quality models for cross-wiki comparability.',
      'Presented at the Wikimedia Technology Summit 2024 and the IIIT Hyderabad Hackathon.',
    ],
    links: { github: 'https://github.com/mahi01agarwal/WikiEvolution', demo: 'https://wikimediafoundation.org/' },
    tag: 'Open Source',
  },
  {
    title: 'Reservoir Computing for Image Encryption',
    org: 'Independent Research · under review at Springer MTAP',
    blurb:
      'Encryption scheme that drives diffusion with chaotic sequences from a reservoir computer trained on a hyperchaotic financial model. Two-key design separates parameter generation from diffusion control.',
    stack: ['Python', 'NumPy', 'Reservoir Computing', 'Chaos Theory', 'Fractional-Order Systems'],
    highlights: [
      'Two-key construction: keys generate (rho, phi) and control chaotic diffusion separately.',
      'Pixel shuffling + bitwise XOR for fast, reversible scrambling.',
      'Robustness validated with NPCR, UACI and histogram-variance metrics against differential attacks.',
    ],
    links: { github: '', demo: '' },
    tag: 'Research',
  },
  {
    title: 'Hand Gesture Occlusion Pipeline',
    org: 'IIIT Delhi · Code for GovTech',
    blurb:
      'GPU-parallel pipeline that lifts 2D hand images into 3D point clouds and compares gestures with Chamfer Distance — built to scale across large gesture datasets.',
    stack: ['PyTorch3D', 'MediaPipe', 'Open3D', 'Python', 'CUDA'],
    highlights: [
      'MediaPipe → Open3D → PyTorch3D pipeline producing per-frame Chamfer scores.',
      'Parallelised on GPU for batch processing with CSV-exported similarity reports.',
      'Visual analysis via histograms and 3D inspection of landmark distributions.',
    ],
    links: { github: '', demo: 'https://codeforgovtech.in/' },
    tag: 'Computer Vision',
  },
  {
    title: 'Semantic Search Engine for NIC',
    org: 'National Informatics Centre',
    blurb:
      'Low-latency semantic search across NIC policy documents and internal data — Sentence-BERT embeddings indexed in FAISS, served through a Streamlit interface.',
    stack: ['Python', 'FAISS', 'Sentence-BERT', 'Hugging Face', 'Streamlit'],
    highlights: [
      'Embedding pipeline tuned for policy-document phrasing and acronyms.',
      'FAISS index sized for fast retrieval over the full NIC corpus.',
      'Streamlit UI with context-aware previews so analysts can scan results quickly.',
    ],
    links: { github: '', demo: 'https://semantic-search-nic.streamlit.app/' },
    tag: 'ML / Retrieval',
  },
  {
    title: 'PPML with the Paillier Cryptosystem',
    org: 'Independent project',
    blurb:
      'Privacy-preserving linear regression that operates on Paillier-encrypted features — a working demonstration that useful predictions and individual privacy are not mutually exclusive.',
    stack: ['Python', 'NumPy', 'pandas', 'Scikit-Learn', 'Matplotlib'],
    highlights: [
      'End-to-end homomorphic training and inference loop.',
      'Benchmarked accuracy against plaintext baselines to quantify the privacy cost.',
      'Notebook walks through the math so the result is reproducible, not just demoable.',
    ],
    links: { github: 'https://github.com/mahi01agarwal/PPML-using-Paillier-Cryptosystem', demo: '' },
    tag: 'Cryptography',
  },
  {
    title: 'Chaos-Lock — Logistic-Map Encryption',
    org: 'Independent project',
    blurb:
      'A symmetric-key encryption scheme built on the logistic map, with a custom PRNG seeded by chaotic dynamics. A small, focused study on how far one well-known equation can take you.',
    stack: ['MATLAB', 'Python', 'Cryptography'],
    highlights: [
      'Custom PRNG derived from logistic-map iterates.',
      'Reference MATLAB implementation plus Python verification harness.',
      'Side-by-side analysis of avalanche behaviour and key sensitivity.',
    ],
    links: { github: 'https://github.com/mahi01agarwal/ChaosLock', demo: '' },
    tag: 'Cryptography',
  },
];

export const experience = [
  {
    role: 'Outreachy Intern',
    roleUrl: 'https://www.outreachy.org/alums/2024-05/',
    org: 'Wikimedia Foundation',
    orgUrl: 'https://wikimediafoundation.org/',
    period: 'May 2024 — Aug 2024',
    location: 'Remote',
    summary:
      'Shipped a quality-evolution dashboard for Wikipedia articles, end-to-end — from research and stakeholder alignment to a Toolforge-hosted pipeline.',
    bullets: [
      'Built a data-visualization tool tracking article-quality evolution across WikiProjects.',
      'Optimized queries over millions of revisions using Wiki Quarry, Toolforge and MariaDB on the replicas.',
      'Integrated language-agnostic quality models so the tool works beyond English Wikipedia.',
      'Presented findings at the Wikimedia Technology Summit 2024 and IIIT Hyderabad Hackathon.',
    ],
  },
  {
    role: 'C4GT Intern',
    roleUrl: 'https://codeforgovtech.in/',
    org: 'IIIT Delhi — Hand Gesture Occlusion Project',
    orgUrl: 'https://iiitd.ac.in/',
    period: 'Jun 2025 — Aug 2025',
    location: 'New Delhi',
    summary:
      'Built a GPU-parallel 3D-gesture pipeline used to study occlusion patterns in sign-language recognition.',
    bullets: [
      'Lifted RGB frames to 3D landmarks with MediaPipe and Open3D point-cloud exports.',
      'Computed Chamfer Distance in PyTorch3D, batched on GPU for large gesture datasets.',
      'Surfaced occlusion patterns through histograms and qualitative inspection of landmark clouds.',
    ],
  },
  {
    role: 'Research Intern',
    roleUrl: 'https://cic.du.ac.in/',
    org: 'Reservoir Computing for Image Encryption — Cluster Innovation Centre',
    orgUrl: 'https://cic.du.ac.in/',
    period: '2024 — 2025',
    location: 'New Delhi',
    summary:
      'Authored a chaos-driven image encryption scheme using a reservoir computer trained on a hyperchaotic financial model. Under review at Springer MTAP.',
    bullets: [
      'Designed a two-key construction separating parameter generation from chaotic diffusion.',
      'Implemented pixel shuffling and bitwise XOR diffusion driven by RC-generated chaos.',
      'Validated robustness against differential attacks via NPCR, UACI and histogram variance.',
    ],
  },
  {
    role: 'Research Intern',
    roleUrl: 'https://cps.iic.ac.in/index.php/people/',
    org: 'CyPSi Laboratory',
    orgUrl: 'https://cps.iic.ac.in/',
    period: 'Feb 2024 — Apr 2024',
    location: 'New Delhi',
    summary:
      'Worked on retinal image segmentation as a building block for downstream medical diagnostics.',
    bullets: [
      'Trained U-Net and CNN models for high-precision fundus segmentation.',
      'Used GAN-based augmentation to harden the model against limited medical-imaging data.',
    ],
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'MATLAB', 'HTML5'],
  },
  {
    group: 'ML / AI',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-Learn',
      'NumPy',
      'Pandas',
      'OpenCV',
      'Hugging Face',
      'Sentence-BERT',
      'FAISS',
      'PyTorch3D',
      'MediaPipe',
    ],
  },
  {
    group: 'Web & UI',
    items: ['React', 'Node.js', 'Streamlit', 'Tkinter', 'Tailwind'],
  },
  {
    group: 'Tools & Infra',
    items: ['Git', 'GitHub', 'Docker', 'MongoDB', 'Toolforge', 'PAWS', 'SSH', 'MariaDB'],
  },
  {
    group: 'Concepts',
    items: [
      'Cryptography',
      'Reservoir Computing',
      'Chaos Theory',
      'Fractional-Order Systems',
      'Semantic Search',
      'Information Retrieval',
      'GANs',
      'Data Warehousing',
    ],
  },
];

// Real posts pulled from medium.com/@agarwalmahima01.
// Want to make this dynamic? Replace the array with a fetch against
//   https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agarwalmahima01
// in a useEffect inside Writing.jsx — the data shape already matches `data.items`.
export const writing = [
  {
    title: 'Understanding MAP-Elites',
    preview:
      'Most optimization algorithms climb toward a single peak. MAP-Elites flips that — it builds a whole map of high-performing solutions across a behaviour space. A walk through why that matters for creative search.',
    tag: 'Machine Learning',
    date: 'Mar 2026',
    url: 'https://medium.com/@agarwalmahima01/understanding-map-elites-34ea40efa09c',
  },
  {
    title: 'Score Distillation Sampling (DreamFusion Paper)',
    preview:
      'How DreamFusion conjures 3D objects from text prompts using a 2D diffusion model it never trained for — and why Score Distillation Sampling is the trick that makes it work.',
    tag: 'Research',
    date: 'Mar 2026',
    url: 'https://medium.com/@agarwalmahima01/score-distillation-sampling-dream-fusion-paper-ec298f9c502e',
  },
  {
    title: 'The Curious Dance of Numbers: Exploring the Collatz Conjecture',
    preview:
      'A deceptively simple sequence that no one has been able to prove always terminates. Notes on what makes the Collatz Conjecture so durable as an open problem.',
    tag: 'Mathematics',
    date: 'Jun 2024',
    url: 'https://medium.com/@agarwalmahima01/the-curious-dance-of-numbers-exploring-the-collatz-conjecture-aff97870ca55',
  },
  {
    title: 'Wrapping Up My Outreachy Journey: Reflections and Growth',
    preview:
      "Looking back on three months at the Wikimedia Foundation — what I built, what I broke, and what I'd tell the version of me who applied.",
    tag: 'Open Source',
    date: 'Aug 2024',
    url: 'https://medium.com/@agarwalmahima01/wrapping-up-my-outreachy-journey-reflections-and-growth-5a103e21a76a',
  },
  {
    title: 'Data-Driven Insights: Using Wikimedia Quarry for My Outreachy Project',
    preview:
      'A technical deep-dive into the SQL and pipelines behind the WikiEvolution dashboard — Quarry, Toolforge replicas, and the tradeoffs of querying live wiki data.',
    tag: 'Data',
    date: 'Jun 2024',
    url: 'https://medium.com/@agarwalmahima01/data-driven-insights-using-wikimedia-quarry-for-my-outreachy-project-67f66a6cfca5',
  },
  {
    title: 'Docker: The Magical Container Ship for Developers',
    preview:
      'A friendly introduction to containers for people who keep hearing "it works on my machine" and want to make that go away.',
    tag: 'Tooling',
    date: 'Jul 2024',
    url: 'https://medium.com/@agarwalmahima01/docker-the-magical-container-ship-for-developers-e5aafbdf625c',
  },
];

# Jiaxing Li · Personal academic homepage

An Apple-inspired, responsive academic homepage built with React, TypeScript, and Vite. All assets and styles are bundled locally. No API key or external CSS service is required.

## Run locally

```sh
npm install
npm run dev
```

Open the local address printed by Vite (normally http://127.0.0.1:3000).

```sh
npm run build      # Type-check and build into dist/
npm run preview    # Preview the production build
```

The relative asset base supports hosting the build at either a domain root or a repository subdirectory such as `/Jiaxing/`. This change does not publish the site automatically.

## Update content

- `constants.ts`: identity, contact links, education, full publication metadata.
- `components/Research.tsx`: research areas and expandable project descriptions.
- `components/About.tsx`: biography, professional experience, funded project participation.
- `public/portrait.jpg`: optimized copy of the author's supplied portrait.
- `styles.css`: responsive layout and visual design.

The publication browser offers published/accepted and first-author filters. Only published, accepted, and in-press papers are included. Search matches titles, author names, venues, and years within the selected filter. Initially five publications are shown, with a button to expand the complete category. Review/revision manuscripts are excluded from the site data and search results.

## Information sources and editorial decisions

Content was transcribed on 21 September 2026 from the author's local materials:

- `../李嘉兴_简历/main.tex` and `main_en.tex`: identity, education, Ant Group experience, research descriptions, and 12 published/accepted/in-press bibliography entries.
- `../李嘉兴_简历/images/ljx.png`: portrait.
- `../论文成果-蓝色加粗.tex`: the explicit SARL OpenReview link.
- Repository origin `https://github.com/Leejiaxing/Jiaxing.git`: GitHub profile identity.

The current Chinese and English CVs take precedence over the separate older bibliography snippet. Under-review and revision manuscripts are omitted at the author’s request. NeuroField-AGL is commented out in the current Chinese CV and absent from the English CV, so it is not included. The TPAMI paper has no explicit publication year in the source; no year has been invented. Publication statuses are author-supplied and have not been independently checked against publisher records.

Every publication has **PAPER** and **code** buttons. Both currently link to the homepage (`#home`) at the author’s request. To connect real resources later, add `paperUrl` and/or `codeUrl` to the corresponding entry in `constants.ts`; omitted links return to the homepage. Phone and private messaging IDs, unpublished manuscript PDFs, and the full recruiting CV are not copied to the public assets. The sample persona, random photographs, placeholder social links, sample news, and unconfigured client-side AI chatbot have been removed.

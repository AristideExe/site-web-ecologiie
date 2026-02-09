# Site web d'ÉcologIIE

Bienvenue sur le README du site d'ÉcologIIE. Si tu lis ceci, c'est que tu souhaites modifier le site web.
Je te mets donc à disposition [le lien vers le Github](https://github.com/AristideExe/site-web-ecologiie).
Cela te permettra de clôner ou de fork le projet à ton envie. Si tu souhaites que je t'ajoute en **contributeur**, n'hésite pas à m'envoyer un petit message sur Discord *(aristideexe)*.

## Architecture du site
J'ai réalisé le site avec [React](https://react.dev/) et [Tailwind CSS](https://tailwindcss.com/). Il pourrait être intéressant d'ajouter un back à l'appli pour avoir un système de formulaire de contact, ou un panel administrateur pour modifier les infos des projets. 

**2 commandes** sont utiles pour développer le site web :
- `yarn dev` : Permet de lancer la compilation en mode dev du site web, pour avoir accès au HMR (Hot Module Reload)
- `yarn build` : Permet de lancer le build du projet, qui se trouvera dans le dossier dist

La liste des projets se trouve dans la classe `Projects.jsx` : `src/components/Projects/Projects.jsx`
J'ai fait en sorte de faire quelque chose de simple, afin qu'un novice puis modifier la liste des projets. Le code de cette partie n'est donc pas forcément le plus propre, mais la modification d'un projet n'est pas dure à prendre en main. 

Si tu as **la moindre question**, n'hésite pas à m'envoyer un message, je serai toujours ravi de répondre.

**Aristide pour ÉcologIIE <*"Ce qui caractérise notre époque, c'est la perfection des moyens et la confusion des fins."*>**
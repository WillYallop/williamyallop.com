## To preface

Right off the bat, I'm going to get this off my chest. Despite being very proud of the outcome of this project, especially considering it took only a day to build. Overall I am disappointed with the code, and the npm package approach I took. That being said, it was my first full JS project and I learnt a LOT doing it.

## Introduction 

Cover Maker was a tool created for a project called "playlisttools". This was supposed to be a one-stop shop for managing Spotify playlists and covered features from updating their details, to generating new playlists entirely. 

With templates, a Pexels API integration, shapes, background colours and gradients, Cover Maker is a complete graphical editor tool for creating playlist cover art. It allows users to export their artwork in formats and resolutions recommended by Spotify and Apple Music, along with the export to JSON option which allows for the project to be opened up again at a later date.

## What could have been done better?

If I were to remake this project today, apart from the obvious choice of using Typescript over vanilla JS. The biggest thing I would change would be the package approach. 

The reason I did this originally was that I wanted to embed the cover maker onto two separate sites while allowing updates to be made regardless of the site they were on. However, coming at this from my current knowledge, this just seems to complicate things unnecessarily. Instead, using npm workspaces or a build system like [Turborepo](https://turborepo.org/) would allow me to achieve the same while keeping everything in one repository.
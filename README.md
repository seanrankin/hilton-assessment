## Sean Rankin's Coding Exercises for Hilton

## Assessment 1
The static assessment can be found in the /mobile directory

### Assessment 1 Notes
1. I'm not being too picky about naming here as most modern setups auto generate classnames to avoid collision / localize classnames.
2. I went with consistent margin values where it made sense. For instance, the margin around the main content was '21px, 22px *, 19px', but I interpreted that as 20px to give the layout balance. In the real world, I'd huddle with the designer to double check the intent...
3. In a production app, I'd make heavy use of SASS or LESS variable to store colors, units, etc. I just hard-coded these values as this is a static page.
4. Most of the "responsiveness" of this layout was baked into it from the markup, but I threw a media query in there just for the show. On a typical project, I'd use media queries to resize or reorder the layout to the viewport, based on the design.
5. I didn't have all the assets (like the arrows) so I grabbed the vectors off the web and converted them to pngs. They aren't a 100 match to the old iOS 2 style in the mockup, but I couldn't locate those PSDs on Apple.com.
6. I ran this file through autoprefixer before testing. Typically I have this setup as part of the build process so you don't have to write vendor prefixes.
7. I made the assumption that a different page would be served up to desktop browsers based on the readme, so I only tested this page in mobile browsers.

## Assessment 2
I bootstrapped this assessment with Create React App

### Assessment 1 Notes
1. I decided to bootstrap the app with Create React App. I’ve built several projects with it, and a bunch without. I really like it for small projects with simple configuration needs. I can do it “from scratch”, but I decided not to burn 3-4 hours configuring Webpack.

2. I’ve only used styled-components once before, and not in production. So I had a little learning to do here. I typically use CSS Modules for css. At any rate, I’m not sure what the best practice for defining components, so I just put them in separate files and exported them.

3. On larger projects, I may have decided to name files differently, but I didn’t spend too much time thinking about that for this assessment.

4. I wrote some basic rendering tests (located in the /test directory). I stuck to testing the basic functionality of the Room component. I know some teams like to write atomic-level UI tests (and that’s cool), but stuck to making sure the Room component has the main elements needed to render correctly. I used a few testing snapshots within these tests. Over the last couple years I’ve been using snapshots to handle a lot of the atomic-level UI testing like CSS that changes based on props.

I also wrote some reducer tests to handle the main actions.

### Setup and run with
```
npm i && npm start
```

##### To run tests
```
npm run test
```

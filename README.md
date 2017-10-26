# reactAppWidget

webpack-dev-server for development

webpack to build bundle.js


copy bundle.js in to your application or host it

initialize the react widget
`<script src="/javascripts/bundle.js" type="text/javascript"></script>
<script type="text/javascript">
MyApp.init({
  initTag: "app"
});
</script>`

initTag takes the ID of the div where the react app should render

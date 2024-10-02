1KB lightweight, fast & powerful JavaScript templating engine with zero dependencies.
Compatible with server-side environments like Node.js, module loaders like RequireJS or webpack and all web browsers.

Usage
Client-side
Install the blueimp-tmpl package with NPM:

npm install blueimp-tmpl
Include the (minified) JavaScript Templates script in your HTML markup:

<script src="js/tmpl.min.js"></script>
Add a script section with type "text/x-tmpl", a unique id property and your template definition as content:

<script type="text/x-tmpl" id="tmpl-demo">
  <h3>{%=o.title%}</h3>
  <p>Released under the
  <a href="{%=o.license.url%}">{%=o.license.name%}</a>.</p>
  <h4>Features</h4>
  <ul>
  {% for (var i=0; i<o.features.length; i++) { %}
      <li>{%=o.features[i]%}</li>
  {% } %}
  </ul>
</script>
"o" (the lowercase letter) is a reference to the data parameter of the template function (see the API section on how to modify this identifier).

In your application code, create a JavaScript object to use as data for the template:

var data = {
  title: 'JavaScript Templates',
  license: {
    name: 'MIT license',
    url: 'https://opensource.org/licenses/MIT'
  },
  features: ['lightweight & fast', 'powerful', 'zero dependencies']
}
In a real application, this data could be the result of retrieving a JSON resource.

Render the result by calling the tmpl() method with the id of the template and the data object as arguments:

document.getElementById('result').innerHTML = tmpl('tmpl-demo', data)

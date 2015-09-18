<h1>Breakpoints class module</h1>

This module adds classes to Body tag of page based on configured <a href="https://www.drupal.org/project/breakpoints">Breakpoints</a> via Javascript.

<h2>Why not <a href="https://www.drupal.org/project/browserclass">Browserclass</a>?</h2>
Do you like Browserclass module as we do? So you know that changing of browser window size not changes classes that applied to Body tag. It happens because Browserclass module logic is based on User-agent and works totally in backend. 

<strong>Breakpoints class</strong> module can add and remove classes to body tag just on window resize and matching/unmatching of breakpoints.

<h2>Usecases:</h2>
<ul>
	<li>One place for <code>@media</code> queries. Because <a href="https://www.drupal.org/project/breakpoints">breakpoints</a> module configuration stored in backend - it can be single place where you will add breakpoints to your site. All breakpoints easily can be exported to <a href="https://www.drupal.org/project/features">Features</a>.</li>
	<li>Responsive theming based on body classes instead of hardcoding <code>@media</code> queries in styles and moving them to backend side.</li>
	<li>Responsive javascript development. All <code>@media</code> queries are avaliable in <code>Drupal.settings.breakpoints_class.breakpoints</code> javascript object.</li>
	<li>???</li>
	<li>Profit</li>
</ul>

<h2>Requirements:</h2>
<ul>
<li><a href="https://www.drupal.org/project/breakpoints">Breakpoints</a> module</li>
<li><a href="http://wicky.nillia.ms/enquire.js/">Enquire.js</a> library.*</li>
<li><em>(optional)</em> <a href="https://github.com/scottjehl/Respond">Respond.js</a> library* for better support of IE.</li>
</ul>

<h2>Installation</h2>
<ul>
	<li>Enable <strong>Breakpoints class</strong> module</li>
	<li>Download <a href="http://wicky.nillia.ms/enquire.js/">Enquire.js</a> library to <code>/sites/all/libraries/enquire.js/</code> folder.</li>
	<li><em>(optional)</em> Download <a href="http://wicky.nillia.ms/enquire.js/">matchMedia.js</a> library to <code>/sites/*/libraries/matchMedia.js/</code> folder for better IE compatibility.</li>
	<li>Add some breakpoints with <a href="https://www.drupal.org/project/breakpoints">Breakpoints</a> module</li>
	<li>Enjoy your classes!</li>
</ul>
<em>Also libraries can be added using <a href="https://www.drupal.org/project/library_pack">library_pack</a> module.</em>

<h2>Functionality</h2>
<ul>
	<li>Allows to add classes to body tag based on Breakpoints module configuration for specific themes.</li>
	<li>Allows to setup classes prefix in module settings. It might be helpful if you have some conflicts with breakpoints and already existing body classes.</li>
	<li>Debug mode for logging into Javascript console all breakpoint changes.</li>
</ul>

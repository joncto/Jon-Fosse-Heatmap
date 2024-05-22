# The Jon Fosse Heatmap
![](https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/FossePros_heatmap_web.png)

This small repository utilise data from Sceneweb about theatre productions based on plays by Jon Fosse, to create map visualisations. The objective is to visualise the geographical distribution of Fosse's work over time (1994-2024).

**The script:**
- loads data from Excel
- geocode street addresses into geo-coordinates (OpenCage's Geocoding API)
- creates an interactive map with all productions
- creates a heatmap of productions over time

If you do not want to run the code and just view the results, you can either [preview an interactive map with all productions](http://htmlpreview.github.io/?https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/Jon-Fosse-Heatmap/output/fosse-map-pins.html) or [preview a heatmap animation over time](http://htmlpreview.github.io/?https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/Jon-Fosse-Heatmap/output/fosse-heatmap.html).

## Data
The data is provided by the National Performing Arts Archive of Norway (sceneweb.no) and collected by [Jens-Morten Hanssen](https://www.nb.no/ansatte/jens-morten-hanssen/), Researcher II at the National Library of Norway.

## Running the Notebook
Jupyter Notebooks are interactive tools for computing, but does not require computational expertise. Basically, they contain a mix of explanatory text and code cells. Text cells are written in Markdown, while code cells are written in Python.

To execute a code cell, you just have to make sure that it is marked, and then press <kbd>Shift</kbd> + <kbd>Enter</kbd>.

Read more about working with notebooks at the [Jupyter Notebook documentation pages](https://jupyter-notebook.readthedocs.io/en/latest/).

## Requirements
The script is written in Python and requires the following packages to be installed:
- pandas
- geopy
- opencage
- folium
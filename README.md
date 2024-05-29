# The Jon Fosse Heatmap
![](https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/FossePros_heatmap_web.png)

This small repository utilise data from the National Performing Arts Archive (Sceneweb) about theatre productions based on plays by Jon Fosse, to create map visualisations. The objective is to visualise the geographical distribution of Fosse's work over time (1994-2024).

**The script:**
- loads data from Excel
- geocode street addresses into geo-coordinates (OpenCage's Geocoding API)
- creates an interactive map with all productions
- creates a heatmap of productions over time

## Preview the maps
If you want to view the maps, without producing them yourself, you can download the HTMLs and open them in your browser:
- [Interactive map with all productions](https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/Jon-Fosse-Heatmap/output/fosse-map-pins.html)
- [Heatmap over time](https://github.com/joncto/Jon-Fosse-Heatmap/blob/main/Jon-Fosse-Heatmap/output/fosse-heatmap.html).

## Data
The data is provided by the National Performing Arts Archive of Norway (sceneweb.no).

## Running the Notebook
Jupyter Notebooks are interactive tools for computation. However, they do not require computational expertise. Basically, they contain a mix of explanatory text and code cells. Text cells are written in Markdown, while code cells are written in Python.

To execute a code cell, you just have to make sure that it is marked, and then press <kbd>Shift</kbd> + <kbd>Enter</kbd>.

Read more about working with notebooks at the [Jupyter Notebook documentation pages](https://jupyter-notebook.readthedocs.io/en/latest/).

## Requirements
The script is written in Python and requires the following packages to be installed:
- pandas
- geopy
- opencage
- folium

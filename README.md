# Unit 14 Homework: Belly Button Biodiversity

This homework was very involved. First, students had use the D3 Javascript library to read a JSON which contained data about belly button types and bacteria that grows in them.  **As I moved through the project, I did use a lot of logging to test functionality, but that has since been removed to improve function and flow.**


First, we set up a function to intitalize the dashboard and populate the dropdown with the sample id's.  Using the provided HTML, we assigned a variable to the #selDataset tag in the HTML.  Using this, we were able to populate the dropdown with each sample id, housed within the json in the 'names' field.  Once the dropdown was populated and we initiated the first record, the dropdown was tested and found to function.  

Once that was complete, I next moved to populate the demographic information, setting up the function 'demoInfo.'  This function filtered metadata based on sample ID.  One catch was that I found that the metadata needed to be cleared each time a different sample id was chosen in the dropdown.  I had to create a line to clear the existing data so the new data could populate.  After appending value keys to the metadata section, I was finally able to move onto creating the bar graph and bubble graph using Plotly.

In order to build the bar chart, I created the function buildBarChart. Within we had to filter the data for the OTU_IDs and then slice the data to only include the top 10 samples.  In order to graph them correctly, I had to apply .reverse().  I then had to map the OTU to the corresponding ID's.  After this, I could finally move on to creating the chart.

To create the bubble chart, the process was similar to the bar chart from filtering and assiging the data.  There were a few more inputs when setting up, I chose the 'YlOrRd' color scale which has a diverse number of colors and made the chart pop.

Citations

Arrington, C. (2025, February 3). Discussion on the Belly Button Challenge [Personal communication].

Plotly. (n.d.). Colorscales in JavaScript. Plotly. Retrieved February 3, 2025, from https://plotly.com/javascript/colorscales/




- - -

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

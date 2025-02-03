// Function that populates the metadata
function demoInfo(sample) {
    console.log(`Metadata for Sample: ${sample}`);

    // Use d3.json to get the data
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        
        // Filter based on the sample ID
        let result = metadata.filter(sampleResult => sampleResult.id == sample)[0];

        // Clear existing metadata
        d3.select("#sample-metadata").html("");

        // Append key-value pairs to metadata section
        Object.entries(result).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
}

// Function that builds the bar chart
function buildBarChart(sample) {
    d3.json("samples.json").then((data) => {
        let sampleData = data.samples;
        let result = sampleData.filter(sampleResult => sampleResult.id == sample)[0];

        let otu_ids = result.otu_ids.slice(0, 10).reverse();
        let otu_labels = result.otu_labels.slice(0, 10).reverse();
        let sample_values = result.sample_values.slice(0, 10).reverse();

        let yticks = otu_ids.map(id => `OTU ${id}`);

        let barChart = {
            y: yticks,
            x: sample_values,
            text: otu_labels,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 Bacteria Cultures Found",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU ID" }
        };

        Plotly.newPlot("bar", [barChart], layout);
    });
}

// Function to create the bubble chart
function buildBubbleChart(sample) {
    d3.json("samples.json").then((data) => {
        let sampleData = data.samples;
        let result = sampleData.filter(sampleResult => sampleResult.id == sample)[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let bubbleChart = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "YlOrRd"
            }
        };

        let layout = {
            title: "Bacteria Cultures Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Sample Values" }
        };

        Plotly.newPlot("bubble", [bubbleChart], layout);
    });
}

// Function to initialize the dashboard
function initialize() {
    let select = d3.select("#selDataset");

    // Populate dropdown
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names;
            
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });
        
        let sample1 = sampleNames[0];

        // Call functions to build the dashboard with the first sample
        demoInfo(sample1);
        buildBarChart(sample1);
        buildBubbleChart(sample1);
    });
}

// Function to update the dashboard when selection changes
function optionChanged(item) {
    demoInfo(item);
    buildBarChart(item);
    buildBubbleChart(item);
}

// Initialize dashboard
initialize();

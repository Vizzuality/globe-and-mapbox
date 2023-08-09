export const markers = {
  "type": "FeatureCollection",
  "features": [
    {
      "id": "marker-1",
      "type": "Feature",
      "properties": {
        "name": "New York",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.935242,
          40.730610
        ],
        bbox: [-74.13053379379362, 40.692483560598305, -73.89595050330738, 40.79861435341658]
      }
    },
    {
      "id": "marker-2",
      "type": "Feature",
      "properties": {
        "name": "Los Angeles",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.243683,
          34.052235
        ],
        bbox: [-119.44705985623926, 51.57406796791432, -116.48322554361025, 53.35076432762054]
      }
    },
    {
      "id": "marker-3",
      "type": "Feature",
      "properties": {
        "name": "Chicago",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.629799,
          41.878113
        ],
        bbox: [-88.29754186116462, 41.574026458399516, -87.01711033759814, 42.15286526263964]
      }
    },
  ]
} satisfies GeoJSON.FeatureCollection<GeoJSON.Point>;
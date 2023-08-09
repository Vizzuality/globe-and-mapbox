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
        ]
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
        ]
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
        ]
      }
    },
  ]
} satisfies GeoJSON.FeatureCollection<GeoJSON.Point>;
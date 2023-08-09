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
        bbox: [-73.945242, 40.720610, -73.925242, 40.740610]
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
        bbox: [-118.253683, 34.042235, -118.233683, 34.062235]
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
        bbox: [-87.639799, 41.868113, -87.619799, 41.888113]
      }
    },
  ]
} satisfies GeoJSON.FeatureCollection<GeoJSON.Point>;
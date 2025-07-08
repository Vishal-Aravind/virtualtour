var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 1.8,
          "pitch": 0.34,
          "rotation": 0.1,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.6957911418774207,
          "pitch": 0.08438798348453602,
          "rotation": 4.71238898038469,
          "target": "2-bedroom1"
        },
        {
          "yaw": 2.8407568459798753,
          "pitch": -0.0029744374345135327,
          "rotation": 0,
          "target": "4-bedroom3"
        },
        {
          "yaw": 2.8595574240435404,
          "pitch": 0.11004232568885008,
          "rotation": 1.5707963267948966,
          "target": "3-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.608985551713694,
          "pitch": 0.3374917978558738,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 2.576811011515246,
          "pitch": 0.21168717925798575,
          "rotation": 4.71238898038469,
          "target": "2-bedroom1"
        },
        {
          "yaw": 2.636274146966464,
          "pitch": 0.0873756301736961,
          "rotation": 0.7853981633974483,
          "target": "3-bedroom2"
        },
        {
          "yaw": 2.5793409837542827,
          "pitch": 0.03958415952805794,
          "rotation": 5.497787143782138,
          "target": "4-bedroom3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0420071221983873,
          "pitch": 0.15693038885301824,
          "rotation": 0.7853981633974483,
          "target": "0-living-room"
        },
        {
          "yaw": 1.8321513695280212,
          "pitch": 0.16368313692847636,
          "rotation": 5.497787143782138,
          "target": "3-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1505791020488676,
          "pitch": 0.328207502567313,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        },
        {
          "yaw": -1.8244705947553719,
          "pitch": 0.19246630401777054,
          "rotation": 1.5707963267948966,
          "target": "4-bedroom3"
        },
        {
          "yaw": -2.1877175454522675,
          "pitch": 0.06282099234651639,
          "rotation": 0,
          "target": "2-bedroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom3",
      "name": "Bedroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.205250834757038,
          "pitch": 0.16312641664215022,
          "rotation": 0.7853981633974483,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

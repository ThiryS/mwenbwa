// eslint-disable-next-line unicorn/filename-case
import React, {useState, useEffect} from "react";
import "./MapOpen.css";
import {Map, Marker, TileLayer, Popup} from "react-leaflet";
import Trees from "./data/arbustum.json";
import treepng from "./data/tree.png";
import MarkerClusterGroup from "react-leaflet-markercluster";
import leaf from "./data/leaf.png";
import TreeComponentPopup from "./TreeComponentPopup";
import axios from "./axios";

function MapOpen(props) {
    //Icon properties
    // eslint-disable-next-line no-undef
    const icon = L.icon({
        iconUrl: treepng,
        iconSize: [30, 30],
    });

    //map center for getAllTrees Function
    const [mapCenter, setMapCenter] = useState([50.644855, 5.573321]);
    const [mapZoom, setMapZoom] = useState(17);

    // new tree collection state
    const [newTrees, setNewTrees] = useState([]);

    //api request getAllTrees
    const getAllTrees = (tempMapCenter) => {
        axios
            .post("/trees", {
                lat: tempMapCenter[0],
                lng: tempMapCenter[1],
            })
            .then((res) => {
                setNewTrees(res.data); //sera la response objet json
                console.log(res.data);
            })
            .catch((err) => console.log(err.message));
    };

    // run get all tree when the app first launches and then only on viewport events
    useEffect(() => {
        getAllTrees(mapCenter);
    }, [mapCenter]);

    return (
        <Map
            viewport={{center: mapCenter, zoom: mapZoom}}
            minZoom={15}
            onViewportChanged={(e) => {
                setMapZoom(e.zoom);
                setMapCenter(e.center);
            }}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
            />
            <MarkerClusterGroup disableClusteringAtZoom={17}>
                {newTrees.map((tree) => (
                    <Marker
                        icon={icon}
                        key={tree._id}
                        position={[tree.y_phi, tree.x_lambda]}>
                        <Popup>
                            <TreeComponentPopup tree={tree} name={props.name} />
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </Map>
    );
}

export default MapOpen;

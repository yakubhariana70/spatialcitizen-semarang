import React, { useCallback, useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import MapboxSection from "./MapboxSection";
import GraphSection from "./GraphSection";

// \\ STYLE
import "./map.css";

// || DATA
import demografi from "../../data/demografi-semarang.geojson";
import poi from "../../data/poi-semarang.geojson";

const Map = () => {
  const [demografiData, setDemografiData] = useState(null);
  const [poiData, setPoiData] = useState(null);
  const [activeLayer, setActiveLayer] = useState("SLTP");
  const [activeCounty, setActiveCounty] = useState("Tembalang");
  const [inTransition, setInTransition] = useState(false);

  //Fetch Demografi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const demo_response = await fetch(demografi);
        const demo_data = await demo_response.json();
        setDemografiData(demo_data);
        const poi_response = await fetch(poi);
        const poi_data = await poi_response.json();
        setPoiData(poi_data);
        console.log("data demografi:", demo_data);
        console.log("data poi:", poi_data);
        // Membaca nilai initial state activeCounty dari data GeoJSON
        const initialCounty =
          demo_data.features[104].properties["DESA ATAU KELURAHAN"];
        setActiveCounty(initialCounty);
      } catch (error) {
        console.error("Gagal mengambil data Demografi GeoJSON :", error);
      }
    };
    fetchData();
  }, []);

  //Fungsi Pergantian Field Layer
  const onChangeLayer = useCallback(
    (selectedLayer) => {
      setInTransition(true);
      setTimeout(() => {
        setActiveLayer(selectedLayer);
      }, 500);
      setTimeout(() => {
        setInTransition(false);
      }, 500);
    },
    [setInTransition, setActiveLayer]
  );
  // Fungsi untuk Memperbaharui Poligon Kelurahan Aktif 
  const onChangeCounty = useCallback(
    (selectedCounty) => {
      setActiveCounty(selectedCounty);
    },
    [setActiveCounty]
  );

  return (
    <div id="map-page">
      <Container fluid>
        <Row>
          <Col xs={12} id="header-map">
            <NavigationBar />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8} id="mapbox-section">
            <div>
              <MapboxSection 
              demografiData={demografiData}
              poiData={poiData} 
              activeLayer={activeLayer}
              activeCounty={activeCounty}
              onChangeCounty={onChangeCounty}
              inTransition={inTransition}
              />
            </div>
          </Col>
          <Col xs={12} lg={4} id="graph-section">
            <div>
              <GraphSection 
              demografiData={demografiData} 
              activeCounty={activeCounty}
              activeLayer={activeLayer}
              onChangeLayer={onChangeLayer}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col id="footer-map">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Map;

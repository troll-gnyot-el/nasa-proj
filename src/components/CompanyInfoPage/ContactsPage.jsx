import React, { useEffect, useRef } from 'react';
import "../ProductDetail/ProductDetail.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ContactPage = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    const mapStyles = {
        width: '600px',
        height: '600px'
    };

    const companyAddress = {
        lat: 55.750161, // Latitude for Perovo metro station
        lng: 37.787539 // Longitude for Perovo metro station
    };

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map(mapContainerRef.current).setView([companyAddress.lat, companyAddress.lng], 13);
            mapRef.current = map;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([companyAddress.lat, companyAddress.lng]).addTo(map)
                .bindPopup('Our Office')
                .openPopup();
        }
    }, [companyAddress]);

    return (
        <div className="product-page-container" style={{ justifyContent: "center" }}>
            <h1 className="title-rainbow product-title">Contact Us</h1>
            <div>
                <h2>Our Location:</h2>
                <div ref={mapContainerRef} id="map" style={mapStyles}></div>
            </div>
            <div>
                <h2>Contact Information:</h2>
                <p><strong>Phone:</strong> +7 (999) 456-7890</p>
                <p><strong>Email:</strong> info@spaceproj.com</p>
                <p><strong>Support:</strong> support@spaceproj.com</p>
            </div>
        </div>
    );
};

export default ContactPage;

import React from 'react';
import styles from "@/application/styles/Home.module.scss";

export interface IServiceItem {
    image: string,
    title: string,
    text: string,
}

export const ServiceItem: React.FC<IServiceItem> = (props) => {
    const { image, title, text} = props
    return (
        <div className={styles.serviceItem}>
            <img src={image} />
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    );
}

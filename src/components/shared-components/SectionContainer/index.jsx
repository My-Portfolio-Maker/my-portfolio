import React from 'react';

const Section = ({children, className="", id="", style={}, ftco=true, noPb=true, noPt=false}) => {
    return (
        <section id={id} style={style?style:''} className={`${ftco?'ftco-section ':''}${noPb?'ftco-no-pb ':''}${noPt?'ftco-no-pt ':''}${className}`}>
            {children}
        </section>
    );
};

export default Section;
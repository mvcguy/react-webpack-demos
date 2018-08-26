import React from 'react';
import LoadWebsite from './hoc-load-website'
import Button from './button';
import Link from './link';
import Logo from './Logo';

const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

const HocContent = function(props){
    return(
        <div>
            <br/>
            <br/>
            <h2>Higher order components demo</h2>
            <br/>
            <EnhancedButton />
            <br/>
            <br/>
            <EnhancedLink />
            <br/>
            <br/>
            <EnhancedLogo />
            <br/>
            <br/>
            <iframe src="" id="frame" width="600" height="500"></iframe>
        </div>
    );
}

export default HocContent;
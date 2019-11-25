import React from 'react'
import styled from 'styled-components';

const Content = ({className}) => {
    return (
        <section className={className}>
            <h3>section title</h3>
            <p>
             lorem asdfal; asf as fa sdf asdf  asdf as df asdf kfjl e r asd f asdfas
             asfdas fasfasf
            </p>
        </section>
    )
}

export default styled(Content)`
text-transform: capitalize;
padding:243m;
${(props)=>`background:${props.theme.secondaryColor}`};
${(props)=>`color:${props.theme.primaryColor}`};
`;

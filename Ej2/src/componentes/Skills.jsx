
export const Skills = ({skils}) => (
    <ul>
        {skils.map((sk, i) => (
            <li key={i}>{sk}</li>
        ))}
    </ul>
)
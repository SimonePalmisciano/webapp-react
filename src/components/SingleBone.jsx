
function SingleBone({ isActive }) {
    return (
        !isActive ? <img src="/bone-empty.svg" /> : <img src="/bone-full.svg" />
    )
}

export default SingleBone
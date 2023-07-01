
import Button from '@mui/material/Button';

export default function ButtonPanel(props: {
    buttonHandler : (code: string) => void;
}) {
    return ( 
        <div>
            <div>
                <Button variant="contained"  onClick={() => props.buttonHandler("7")}>7</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("8")}>8</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("9")}>9</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("AC")}>AC</Button>
            </div>
            <div>
                <Button variant="contained"  onClick={() => props.buttonHandler("4")}>4</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("5")}>5</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("6")}>6</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("-")}>-</Button>
            </div>
            <div>
                <Button variant="contained"  onClick={() => props.buttonHandler("1")}>1</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("2")}>2</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("3")}>3</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("+")}>+</Button>
            </div>
            <div>
                <Button variant="contained"  onClick={() => props.buttonHandler("0")}>0</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler(".")}>.</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("D")}>D</Button>
                <Button variant="contained"  onClick={() => props.buttonHandler("=")}>=</Button>
            </div>
        </div>
    );
}

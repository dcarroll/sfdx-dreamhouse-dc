.hidden {
    display: none;
}

input[type=range]{
    -webkit-appearance: none;
    width:200px;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 500px;
    height: 1px;
    background: #32738E;
    border: none;
    border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 24px;
    width: 16px;
    border-radius: 2px;
    background: #32738E;
    margin-top: -12px;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #32738E;
}

.row {
    display: table-row
}
.cell {
    display: table-cell;
    padding: 8px;
}


function exibirAlerta(): void {
    alert("alerta exibido com sucesso!")
}

function exibirNome(): void {
    const inputnome = document.getElementById("nome") as HTMLInputElement;

    alert(`usuario ativo: ${inputnome.value}`)
}
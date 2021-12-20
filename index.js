// DOM
const  svg_element = './Brasil-estruturado.svg'
const svg_box = document.querySelector('.svg_box')
const insert_text = document.querySelector('.data')
// 

// insere o conteúdo svg dinamicamente com o carregamento da página
window.onload= () => {
    fetch(svg_element)
        .then((res) => res.text())
        .then((res) => {
            const placeDiv = document.createElement('div.insert_svg');
            placeDiv.innerHTML = res;
            const addSvg = placeDiv.getElementsByTagName('svg')[0];
            svg_box.appendChild(addSvg);
            return true;
        })
    .then(() => interactMap())
}

// adiciona o evento de click em cada estado do mapa do Brasil
const interactMap = () => {
    document.querySelectorAll('path').forEach(path => {
        const poo_a = path.parentElement
        poo_a.addEventListener('click', (e) => {
            const id = path.getAttribute('id')
            findElement(id)
        })
    })
}

// versão antiga do evento de click - não engloba o clickde mouse sobre a sigla do estado
/*
const interactMap = () => {
    document.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', (e) => {
            const id = e.target.class
            console.log(id);
            insert_text.innerHTML = id
            // findElement(id)
        })
    })
}
*/

// instancia a biblioteca de zooming e panning -versão 2-
const findElement = (id) => {
    for (let i = 0; i < estados.length; i++) {
        const element = estados[i];
        if (element.id = id)
        insert_text.innerHTML = `<p>${element.id}</p>`
    }
}

// array de dados de cada estado
// melhorar para fornecer dados das embaixadas
const estados = [
    {
        nome: "Acre",
        sigla: "AC"
    },
    {
        nome: "Alagoas",
        sigla: "AL"
    },
    {
        nome: "Amapá",
        sigla: "AP"
    },
    {
        nome: "Amazonas",
        sigla: "AM"
    },
    {
        nome: "Bahia",
        sigla: "BA"
    },
    {
        nome: "Ceará",
        sigla: "CE"
    },
    {
        nome: "Distrito Federal",
        sigla: "DF"
    },
    {
        nome: "Espírito Santo",
        sigla: "ES"
    },
    {
        nome: "Goiás",
        sigla: "GO"
    },
    {
        nome: "Maranhão",
        sigla: "MA"
    },
    {
        nome: "Mato Grosso",
        sigla: "MT"
    },
    {
        nome: "Mato Grosso do Sul",
        sigla: "MS"
    },
    {
        nome: "Minas Gerais",
        sigla: "MG"
    },
    {
        nome: "Pará",
        sigla: "PA"
    },
    {
        nome: "Paraíba",
        sigla: "PB"
    },
    {
        nome: "Paraná",
        sigla: "PR"
    },
    {
        nome: "Pernambuco",
        sigla: "PE"
    },
    {
        nome: "Piauí",
        sigla: "PI"
    },
    {
        nome: "Rio de Janeiro",
        sigla: "RJ"
    },
    {
        nome: "Rio Grande do Norte",
        sigla: "RN"
    },
    {
        nome: "Rio Grande do Sul",
        sigla: "RS"
    },
    {
        nome: "Rondônia",
        sigla: "RO"
    },
    {
        nome: "Roraima",
        sigla: "RR"
    },
    {
        nome: "Santa Catarina",
        sigla: "SC"
    },
    {
        nome: "São Paulo",
        sigla: "SP"
    },
    {
        nome: "Sergipe",
        sigla: "SE"
    },
    {
        nome: "Tocantins",
        sigla: "TO"
    }
]

// função de zoom para o mapa -versão 1-
/*
const zoomObj = document.querySelector('.svg_box')
let zoom = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomObj.style.transform = `scale(${(zoom += 0.1)})`;
    } else {
        zoomObj.style.transform = `scale(${(zoom -= 0.1)})`;
    }
});
*/
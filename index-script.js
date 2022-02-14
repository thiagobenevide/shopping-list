class Product{
    constructor(){
        this.id = 1
        this.arrayProducts = []
    }

    save(){
        console.log(this.arrayProducts)
        let productSelect = this.readData() //variável
        this.validateField(productSelect)
        
        if (this.validateField(productSelect)){
            this.addProduct(productSelect)
        }

        this.listProduct()
        
        this.clearData()
    }

    listProduct(){
        let tbody = document.querySelector("#tbody")
        tbody.innerText = ""


        for( let interval = 0; interval < this.arrayProducts.length; interval++){
            let tr = tbody.insertRow()

            let td_name = tr.insertCell()
            let td_delete = tr.insertCell()
            let td_done = tr.insertCell()

            td_name.innerText = this.arrayProducts[interval].nameproduct

            
            tr.classList.add("line")
            td_name.classList.add("item")
            
            let buttonDelete = document.createElement("button")
            buttonDelete.innerText = "Excluir"
            
            let buttonDone = document.createElement("button")
            buttonDone.innerText = "Feito"

            buttonDelete.setAttribute("onclick", "product.deleteProduct("+this.arrayProducts[interval].id+")")

            buttonDone.setAttribute("onclick", "product.doneProduct("+JSON.stringify(this.arrayProducts[interval])+")")

            td_delete.appendChild(buttonDelete)
            td_done.appendChild(buttonDone)
            
            buttonDelete.classList.add("delete")
            buttonDone.classList.add("done")

            
        }
    }

    addProduct(productSelect){
        this.arrayProducts.push(productSelect)
        this.id++
        
        
    }

    readData(){
        let writtenProduct = {} //objeto

        writtenProduct.id = this.id
        writtenProduct.nameproduct = document.querySelector("#product").value
        
        return writtenProduct;
    }

    validateField(productSelect){
        let mensage = ""

        if (productSelect.nameproduct == ""){
            mensage += "- Informe o produto para adicionar"
        }

        if (mensage != ""){
            alert(mensage)
            return false
        }

        return true
    }

    deleteProduct(id){
        let tbody = document.querySelector("#tbody")

        for(let interval = 0; interval < this.arrayProducts.length; interval++){
            if (this.arrayProducts[interval].id == id){
                this.arrayProducts.splice(interval, 1)
                tbody.deleteRow(interval)
            }
        }
    }

    doneProduct(data){
        

        
    }

    clearData(){
        document.querySelector("#product").value = ""
        document.querySelector("#product").focus()
    }
}

var product = new Product()


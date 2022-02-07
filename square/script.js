let commandInput = documen.getElementById("command")
let Input = document.getElementById("commands")

function reader(a) {
    let n = commandInput.Value
    if (n === "load reader.exe") {
        if (n === "run reader.exe") {
            a = "reader property load true waiting to respond..."
            commandInput = a
        }
    } else if (n === "load bot.exe") {
        if (n === "run bot.exe") {

        }

    } else if (n === "load git.exe") {
        if (n === "run git.exe") {

        }

    } else if (n === "load meme.exe") {
        if (n === "run meme.exe") {

        }

    } else if (n === "load virus.exe") {
        if (n === "run virus.exe") {

        }
    } else if (n === "load matrix.exe") {
        if (n === "run matrix.exe") {

        }
    } else if (n === "check BootLoder") {
        let loder = true
        if (n === "BootCrash") {
            loder = false
        }
    } else if (n === "check debug") {
        let debug = true
        if (n === "CrashDebug") {
            debug = false
        }
    } else if (n === "BSODLoder") {
        let BSOD = false
        if (n === "ForceBSOD") {
            BSOD = true
        }
    }
    else {
        alert(`${n} is not a command`)
        commandInput = ""
    }
}
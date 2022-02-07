let commandInput = documen.getElementById("command")

function reader() {
    let n = commandInput.Value
    let Input = ""
    if (n === "load reader.exe") {
        if (n === "run reader.exe") {
            Input += "waiting for grand permition to run reader.exe..."
        }
    } else if (n === "load bot.exe") {
        if (n === "run bot.exe") {
            Input += "Bot failed to work..."
        }

    } else if (n === "load git.exe") {
        if (n === "run git.exe") {
            Input += "git failed to publish work.pdf..."
        }

    } else if (n === "load meme.exe") {
        if (n === "run meme.exe") {
            Input += "meme successsfuly loaded..."
        }

    } else if (n === "load virus.exe") {
        if (n === "run virus.exe") {
            Input += "You are an idiot".repeat(100000000000)
        }
    } else if (n === "load matrix.exe") {
        if (n === "run matrix.exe") {
            Input += "01".repeat(1000000000000)
        }
    } else if (n === "check BootLoder") {
        let loder = true
        Input += "BootLoder successfuly loded..."
        if (n === "BootCrash") {
            loder = false
            Input += "BootLoder stoped working..."
        }
    } else if (n === "check debug") {
        let debug = true
        Input += "debuging ON..."
        if (n === "CrashDebug") {
            debug = false
            Input += "debug stoped working..."
        }
    } else if (n === "BSODLoder") {
        let BSOD = false
        Input += "your system works without problems..."
        if (n === "ForceBSOD") {
            BSOD = true
            Input += "your system ran into a problem failed to load file btt.fgh..."
        }
    }
    else {
        alert(`${n} is not a command`)
        commandInput = ""
    }
    let a = documen.getElementById("commands").innerHTML(Input)


}
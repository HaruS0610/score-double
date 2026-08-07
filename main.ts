namespace scoreDouble {
    let target = 0
    let initialized = false
    let handler: (() => void) = null

    /**
     * スコアが2倍になったとき
     */
    //% block="スコアが2倍になったとき"
    export function onScoreDoubled(action: () => void) {
        handler = action

        if (!initialized) {
            initialized = true

            target = info.score() * 2

            game.onUpdate(function () {
                if (info.score() >= target) {
                    if (handler) {
                        handler()
                    }

                    target = target * 2
                }
            })
        }
    }
}

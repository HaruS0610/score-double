namespace scoreThirty {
    let nextScore = 60
    let handler: (() => void) = null
    let started = false

    /**
     * スコアが30増えるたびに実行
     */
    //% block="スコアが30増えるたび"
    export function onScoreThirty(action: () => void) {
        handler = action

        if (!started) {
            started = true
            nextScore = 60

            game.onUpdate(function () {
                if (info.score() >= nextScore) {
                    while (info.score() >= nextScore) {
                        if (handler) {
                            handler()
                        }

                        nextScore += 30
                    }
                }
            })
        }
    }
}

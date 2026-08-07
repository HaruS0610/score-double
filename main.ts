namespace scoreDouble {
    let target = 60
    let triggered = false
    let handler: (() => void) = null

    /**
     * スコアが2倍になったとき
     */
    //% block="スコアが2倍になったとき"
    export function onScoreDoubled(action: () => void) {
        handler = action

        game.onUpdate(function () {
            if (!triggered && info.score() >= target) {
                triggered = true

                if (handler) {
                    handler()
                }

                target = target * 2
            }

            // 次の目標まで到達していない状態になったら
            // 次回の発動を許可する
            if (info.score() < target) {
                triggered = false
            }
        })
    }
}
